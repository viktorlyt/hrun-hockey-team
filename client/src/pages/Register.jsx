import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    return redirect("/login");
  } catch (error) {
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="smith"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="button member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
