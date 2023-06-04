import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import styles from "./SignIn.module.scss";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import LabelledInput from "../components/ui/LabelledInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import Header from "../components/ui/Header";
import axiosInstance from "../utils/axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    // Perform user login verification here
    axiosInstance
      .post("auth/login", { email, password })
      .then((response) => {
        // Handle successful login
        console.log("Login successful");
        console.log(response.data); // Assuming the response contains user data or authentication token

        // Navigate to the next page on successful login
        navigate("/welcome");
      })
      .catch((error) => {
        // Handle login error
        console.error("Login failed:", error);
        setLoginError(true);
      });
  };

  return (
    <OnboardingLayout>
      <Header title="Welcome" tagLine={"We are your destination"} />
      <LabelledInput
        label={"Email"}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <LabelledInput
        label={"Password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {loginError && (
        <p className={styles.errorMsg}>Login failed. Please try again.</p>
      )}

      <PrimaryButton
        label={"Take me in"}
        onClick={handleSubmit}
        className={styles.cta}
      />
    </OnboardingLayout>
  );
};

export default SignIn;
