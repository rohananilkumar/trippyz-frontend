import React from "react";
import styles from "./SignUp.module.scss";
import OnboardingLayout from "../components/layouts/OnboardingLayout";
import LabelledInput from "../components/ui/LabelledInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import Header from "../components/ui/Header";

const SignIn = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    
    <OnboardingLayout>
      <Header title="Welcome" tagLine={"We are your destination"} />
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
        label={"Take me in"}
        //onClick={() => {}}
        onClick={(x) => {
          console.log('Button clicked!');
        }}
        to={"/welcome"}
        className={styles.cta}
      />
    </OnboardingLayout>
  );
};
export default SignIn;
