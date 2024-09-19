import { useEffect } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import toast from "react-hot-toast";
import customFetch from "../utils/customFetch";
import { useUser } from "../context/UserContext";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/CreateAccountAndLogin";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const loginData = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", loginData);
    // toast.success("Login successful", { duration: 700 });
    // return redirect("/account");
    const userData = await customFetch.get("/user");
    return { success: true, user: userData.data.user };
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
      duration: 2000,
      style: {
        maxWidth: "95%",
        width: "600px",
      },
    });
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData?.success && actionData?.user) {
      updateUser(actionData.user);
      navigate("/account");
    }
  }, [actionData, updateUser, navigate]);

  return (
    <Wrapper>
      <Form method="post" className="form login">
        <h1>Sign in</h1>
        <FormRow
          type="email"
          name="email"
          // defaultValue="john.doe@gmail.com"
          //   value={formData.email}
          //   onChange={handleInputChange}
          //   className={errors.email ? "error" : ""}
          //   isRequired={false}
        />
        {/* {errors.email && <p className="error-message b5">{errors.email}</p>} */}
        <FormRow
          type="password"
          name="password"
          // defaultValue="secret123"
          //   value={formData.password}
          //   onChange={handleInputChange}
          //   className={errors.password ? "error" : ""}
          //   isRequired={false}
        />
        {/* {errors.password && (
          <p className="error-message b5">{errors.password}</p>
        )} */}
        <div className="forgot-password b5">
          {/* TODO */}
          <Link to="/restore-password">Forgot password?</Link>
        </div>
        <button type="submit" className="selected long" disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
        <div className="create-account b5">
          <span className="b5">Don't have an account yet?</span>
          <Link to="/register">
            <h5>Sign up</h5>
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Login;
