import React, { useState } from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import customFetch from "../utils/customFetch";
import FormRow from "../components/FormRow";
import showToast from "../components/CustomToast";
import Wrapper from "../assets/wrappers/CreateAccountAndLogin";
import { isAdult, parseAndValidateDate } from "../utils/functions";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    showToast({
      type: "success",
      title: "You created account successfully!",
      message: "A Confirmation has been sent to your email.",
      linkText: "Go to login page",
      link: "/login",
    });
    return redirect("/login");
  } catch (error) {
    let errorMessage = "";

    if (error?.response?.data?.errors) {
      errorMessage = error.response.data.errors
        .map((err) => err.msg)
        .join("\n");
      console.log("if", errorMessage);
    } else if (error?.response?.data?.msg) {
      errorMessage = error.response.data.msg[0];
      errorMessage = errorMessage
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map((line, index) => {
          // Remove comma if it is the first character
          const cleanedLine = line.replace(/^\s*,\s*/, "");
          return <div key={index}>{cleanedLine}</div>;
        });
    } else {
      errorMessage = error.message || "An error occurred during registration.";
    }

    toast.error(<div className="custom-toast">{errorMessage}</div>, {
      duration: 5000,
      style: {
        maxWidth: "95%",
        width: "600px",
      },
    });
    return error;
  }
};

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeWithDataCollection: false,
  });

  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First and last name are required";

    if (!formData.lastName.trim())
      newErrors.lastName = "First and last name are required";

    if (!formData.dob.trim()) {
      newErrors.dob = "Date of birth is required";
    } else {
      const parsedDate = parseAndValidateDate(formData.dob.trim());
      if (!parsedDate) {
        newErrors.dob =
          "Invalid date format. Please use DD/MM/YYYY or DD-MM-YYYY.";
      } else if (!isAdult(parsedDate)) {
        newErrors.dob = "You must be at least 18 years old";
      }
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (
      !/^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/.test(
        formData.phone.trim()
      )
    )
      newErrors.phone =
        "Phone number must be valid and in the format (123) 456-7890";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim()))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(
        formData.password
      )
    )
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character\n";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.agreeWithDataCollection)
      newErrors.agreeWithDataCollection = "You must agree with data collection";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit triggered");
    const isValid = validateForm();
    console.log("Form Valid:", isValid);
    if (!isValid) {
      e.preventDefault();
      return;
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form" onSubmit={handleSubmit}>
        <h1>Create your account</h1>
        <div className="form-row-inline">
          <FormRow
            type="text"
            name="firstName"
            placeholder="First Name"
            // defaultValue="John"
            value={formData.firstName}
            onChange={handleInputChange}
            className={errors.firstName ? "error" : ""}
            isRequired={false}
          />
          <FormRow
            type="text"
            name="lastName"
            placeholder="Last Name"
            // defaultValue="Doe"
            value={formData.lastName}
            onChange={handleInputChange}
            className={errors.lastName ? "error" : ""}
            isRequired={false}
          />
        </div>
        {(errors.firstName || errors.lastName) && (
          <p className="error-message b5">
            {errors.firstName ? errors.firstName : errors.lastName}
          </p>
        )}
        <FormRow
          type="text"
          name="dob"
          placeholder="Birthday (DD/MM/YYYY)"
          // defaultValue="Birthday (17/09/1978)"
          value={formData.dob}
          onChange={handleInputChange}
          className={errors.dob ? "error" : ""}
          isRequired={false}
        />
        {errors.dob && <p className="error-message b5">{errors.dob}</p>}
        <hr />
        <FormRow
          type="text"
          name="phone"
          placeholder="Phone number (+1506 469 5289)"
          // defaultValue="506 123-5874"
          value={formData.phone}
          onChange={handleInputChange}
          className={errors.phone ? "error" : ""}
          isRequired={false}
        />
        {errors.phone && <p className="error-message b5">{errors.phone}</p>}
        <FormRow
          type="email"
          name="email"
          // defaultValue="john.doe@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          className={errors.email ? "error" : ""}
          isRequired={false}
        />
        {errors.email && <p className="error-message b5">{errors.email}</p>}
        <FormRow
          type="checkbox"
          name="agreeWithDataCollection"
          isLabeled
          labelText="I agree that my data iscollected and stored."
          value={formData.agreeWithDataCollection}
          onChange={handleInputChange}
          className={errors.agreeWithDataCollection ? "error" : ""}
          isRequired={false}
        />
        {errors.agreeWithDataCollection && (
          <p className="error-message b5">{errors.agreeWithDataCollection}</p>
        )}
        <hr />
        <FormRow
          type="password"
          name="password"
          // defaultValue="secret123"
          value={formData.password}
          onChange={handleInputChange}
          className={errors.password ? "error" : ""}
          isRequired={false}
        />
        {errors.password && (
          <p className="error-message b5">{errors.password}</p>
        )}
        <FormRow
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          // defaultValue="secret123"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className={errors.confirmPassword ? "error" : ""}
          isRequired={false}
        />
        {errors.confirmPassword && (
          <p className="error-message b5">{errors.confirmPassword}</p>
        )}
        <button type="submit" className="selected" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Continue"}
        </button>
        <div className="sign-in b5">
          <span className="b5">Already have an account?</span>
          <Link to="/login">
            <h5>Sign in</h5>
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default CreateAccount;
