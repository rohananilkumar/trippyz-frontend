import React from "react";
import styles from "./Routeoptions.module.scss";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Sidebar from "../components/ui/Sidebar";
import Title from "../components/ui/Title";

import Card from "../components/ui/Card";
import Mapview from "../components/ui/Mapview";


const Routeoptions = () => {
  return (
    <div className={styles.dash}>
      <Sidebar />
      <Card
        className={styles.cardviewright}
        title={"Route 1"}
        duration={"3 days, 12 hours"}
        expense={"2000"}
      />

      <Card
        className={styles.cardviewleft}
        title={"Route 1"}
        duration={"3 days, 12 hours"}
        expense={"2000"}
      />

      <div className={styles.mapone}>
        <Mapview className={styles.mapstyle} />

        <Card
          className={styles.cardview}
          title={"Route 1"}
          duration={"3 days, 12 hours"}
          expense={"2000"}
        />
      </div>

      <Title titlefirst={"Route"} titlesec={"Result!"} />

      {/*<DashboardLayout/>*/}
    </div>
  );
};

export default Routeoptions;
