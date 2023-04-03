import React from "react";
import styles from "./OnboardingLayout.module.scss";
import onBoardingImage from "../../assets/onboarding.png";
import Branding from "../ui/Branding";
import LabelledInput from "../ui/LabelledInput";
import PrimaryButton from "../ui/PrimaryButton";
import OboardingVector from "../../assets/Vectors/OnboardingVector.svg";

const OnboardingLayout = ({ children }) => {
  return (
    <div className={styles.onboardingLayout}>
      <div className={styles.inputItem}>
        <Branding />

        <div className={styles.content}>{children}</div>

        <div className={styles.illustration}>
          <img
            src={OboardingVector}
            className={styles.vector}
            alt="nothing much"
          />
        </div>
      </div>
      <div className={styles.imageItem}>
        <img src={onBoardingImage} alt="onboardingimage" />
      </div>
    </div>
  );
};

export default OnboardingLayout;
