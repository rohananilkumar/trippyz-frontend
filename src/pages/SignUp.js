import React from "react";
import styles from "./SignUp.module.scss";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import LabelledInput from "../components/ui/LabelledInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import Header from "../components/ui/Header";
import axiosInstance from "../utils/axios";
import { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });

  const onSubmitclick = () => {
    axiosInstance.post("/auth/register", data);
  };

  return (
    <OnboardingLayout>
      <Header title="Sign Up" tagLine={"We are your destination"} />
      <LabelledInput
        label={"Name"}
        onChange={(nameData) => {
          setData((x) => {
            return {
              ...x,
              name: nameData.target.value,
            };
          });
        }}
      />

      <LabelledInput
        label={"Email"}
        onChange={(email) => {
          setData((x) => {
            return {
              ...x,
              email: email.target.value,
            };
          });
        }}
      />

      <LabelledInput
        label={"Password"}
        onChange={(password) => {
          setData((x) => {
            return {
              ...x,
              password: password.target.value,
            };
          });
        }}
      />

      <PrimaryButton
        label={"Create Account"}
        //onClick={() => {}}
        onClick={onSubmitclick}
        to={"/successfull_login"}
        className={styles.cta}
      />
    </OnboardingLayout>
  );
};
export default SignUp;
