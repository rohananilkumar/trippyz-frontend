import React from "react";
import styles from "./SignUp.module.scss";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import LabelledInput from "../components/ui/LabelledInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import Header from "../components/ui/Header";

const SignUp = () => {
  return (
    <OnboardingLayout>
      <Header title="Sign Up" tagLine={"We are your destination"} />
      <LabelledInput
        label={"Name"}
        onChange={(x) => {
          console.log(x);
        }}
      />

      <LabelledInput
        label={"Email"}
        onChange={(x) => {
          console.log(x);
        }}
      />

      <LabelledInput
        label={"Password"}
        onChange={(x) => {
          console.log(x);
        }}
      />

      <PrimaryButton
        label={"Create Account"}
        onClick={() => {}}
        className={styles.cta}
      />
    </OnboardingLayout>
  );
};
export default SignUp;
