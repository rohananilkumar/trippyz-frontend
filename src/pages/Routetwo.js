import React from "react";
import styles from "./Routetwo.module.scss";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Sidebar from "../components/ui/Sidebar";
import Title from "../components/ui/Title";
import clock from "../assets/Icons/clock.svg";
import money from "../assets/Icons/money.svg";

import Card from "../components/ui/Card";
import IteneraryItem from "../components/ui/Itenerary-Item";
//import Mapview from "../components/ui/Mapview"
//import Map from "../components/ui/Map"

const Details = () => {
  return (
    <div className={styles.dash}>
      <Sidebar />

      <Title titlefirst={"Route"} titlesec={"Result!"} tagLine={"Route 1"} />
      <Card className={styles.floatwindow}>
        <div className={styles.header}>
          <div className={styles.text}>Visiting Locations</div>
          <div className={styles.button}>Budget Calculations</div>
        </div>
        <IteneraryItem
          label="Wrranambool"
          type="hotel"
          day={2}
          item={1}
          time={"3.30pm"}
        />
        <IteneraryItem
          label="Wrranambool"
          type="hotel"
          day={2}
          item={2}
          time={"3.30pm"}
        />
      </Card>

      {/*<DashboardLayout/>*/}
    </div>
  );
};

export default Details;
