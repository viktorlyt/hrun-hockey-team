import React from "react";
import { Form, useActionData, useNavigation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import customFetch from "../utils/customFetch";
import FormRow from "../components/FormRow";
import showToast from "../components/CustomToast";
import Wrapper from "../assets/wrappers/CreateAccountAndLogin";
import { isAdult, parseAndValidateDate } from "../utils/functions";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = {};

  // Validation
  if (!data.firstName.trim() || !data.lastName.trim()) {
    errors.name = "First and last name are required";
  }

  if (data.dob.trim()) {
    const parsedDate = parseAndValidateDate(data.dob.trim());
    if (!parsedDate) {
      errors.dob = "Invalid date format. Please use DD/MM/YYYY or DD-MM-YYYY.";
    } else if (!isAdult(parsedDate)) {
      errors.dob = "You must be at least 18 years old";
    }
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (
    !/^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/.test(
      data.phone.trim()
    )
  ) {
    errors.phone =
      "Phone number must be valid and in the format (123) 456-7890";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email.trim())) {
    errors.email = "Invalid email format";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(data.password)
  ) {
    errors.password =
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (data.agreeWithDataCollection !== "on") {
    errors.agreeWithDataCollection = "You must agree with data collection";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  try {
    await customFetch.post("/auth/register", data);
    showToast({
      type: "success",
      title: "You created account successfully!",
      message: "A Confirmation has been sent to your email.",
      linkText: "Go to login page",
      link: "/login",
    });
    return { success: true };
  } catch (error) {
    let errorMessage = "";

    if (error?.response?.data?.errors) {
      errorMessage = error.response.data.errors
        .map((err) => err.msg)
        .join("\n");
    } else if (error?.response?.data?.msg) {
      errorMessage = error.response.data.msg[0];
      errorMessage = errorMessage
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map((line, index) => {
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
    return { serverError: errorMessage };
  }
};

const CreateAccount = () => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h1>Create your account</h1>
        <div className="form-row-inline">
          <FormRow
            type="text"
            name="firstName"
            placeholder="First Name"
            className={actionData?.name ? "error" : ""}
            isRequired={false}
          />
          <FormRow
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={actionData?.name ? "error" : ""}
            isRequired={false}
          />
        </div>
        {actionData?.name && (
          <p className="error-message b5">{actionData.name}</p>
        )}
        <FormRow
          type="text"
          name="dob"
          placeholder="Birthday (DD/MM/YYYY)"
          className={actionData?.dob ? "error" : ""}
          isRequired={false}
        />
        {actionData?.dob && (
          <p className="error-message b5">{actionData.dob}</p>
        )}
        <hr />
        <FormRow
          type="text"
          name="phone"
          placeholder="Phone number (+1506 469 5289)"
          className={actionData?.phone ? "error" : ""}
          isRequired={false}
        />
        {actionData?.phone && (
          <p className="error-message b5">{actionData.phone}</p>
        )}
        <FormRow
          type="email"
          name="email"
          className={actionData?.email ? "error" : ""}
          isRequired={false}
        />
        {actionData?.email && (
          <p className="error-message b5">{actionData.email}</p>
        )}
        <FormRow
          type="checkbox"
          name="agreeWithDataCollection"
          isLabeled
          labelText="I agree that my data is collected and stored."
          className={actionData?.agreeWithDataCollection ? "error" : ""}
          isRequired={false}
        />
        {actionData?.agreeWithDataCollection && (
          <p className="error-message b5">
            {actionData.agreeWithDataCollection}
          </p>
        )}
        <hr />
        <FormRow
          type="password"
          name="password"
          className={actionData?.password ? "error" : ""}
          isRequired={false}
        />
        {actionData?.password && (
          <p className="error-message b5">{actionData.password}</p>
        )}
        <FormRow
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className={actionData?.confirmPassword ? "error" : ""}
          isRequired={false}
        />
        {actionData?.confirmPassword && (
          <p className="error-message b5">{actionData.confirmPassword}</p>
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
