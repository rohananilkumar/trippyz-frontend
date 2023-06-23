import React from "react";
import styles from "./Budget.module.scss";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Sidebar from "../components/ui/Sidebar";
import Title from "../components/ui/Title";
import LabelledInput from "../components/ui/LabelledInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import clock from "../assets/Icons/clock.svg";
import dollar from "../assets/Icons/dollar-sign.svg";
import axiosInstance from "../utils/axios";
import Card from "../components/ui/Card";
import Map from "../components/ui/Map";

const Details = () => {
  // Sample data for time and people count
  const time = "9:00 AM";
  const peopleCount = 4;

  return (
    <div className={styles.dash}>
      <Sidebar />
      <DashboardLayout />
      <Title
        titlefirst={"Route"}
        titlesec={"Results!"}
        className={styles.budget}
      />

      <Card className={`${styles.window}`}>
        <div className={styles.windowhead}>
          <p className={styles.budgettype}>{"Below budget"}</p>
          <p className={styles.budgetroutethree}>{"Route 3"}</p>
        </div>
        <Map className={styles.budgetmapthree} />
      </Card>

      <Card className={`${styles.window1}`}>
        <div className={styles.windowhead}>
          <p className={styles.budgettype}>{"On budget"}</p>
          <p className={styles.budgetroute}>{"Route 1"}</p>
        </div>
        <Map className={styles.budgetmapone} />
      </Card>

      <Card className={`${styles.window2}`}>
        <div className={styles.windowhead}>
          <p className={styles.budgettype}>{"Above budget"}</p>
          <p className={styles.budgetroutetwo}>{"Route 2"}</p>
        </div>
        <Map className={styles.budgetmaptwo} />
      </Card>

      <div className={styles.contents}>
        <div className={styles.card_title}>
          {/* Display time */}
          <h2>Time: {time}</h2>
        </div>
        <div className={styles.card_body}>
          <div className={styles.clock}>
            <img src={clock} alt="clock" />
            <p>45</p>
          </div>

          <div className={styles.expense}>
            <img src={dollar} alt="money" className={styles.money} />
            <p>899 (on budget)</p>
          </div>

          <div className={styles.btn}>
            <button className={styles.smallbut}>
              <a>Food</a>
            </button>
            <button className={styles.smallbut}>
              <a>Petrol</a>
            </button>
            <button className={styles.smallbut}>
              <a>Stay</a>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.buttons}></div>
    </div>
  );
};

export default Details;
