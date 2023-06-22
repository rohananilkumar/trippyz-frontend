import React ,{useState} from "react";
import styles from "./Routetwo.module.scss";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Sidebar from "../components/ui/Sidebar";
import Title from "../components/ui/Title";
import clock from "../assets/Icons/clock.svg";
import money from "../assets/Icons/money.svg";

import Card from "../components/ui/Card";
import IteneraryItem from "../components/ui/Itenerary-Item";
import MapTest from "./maptest";
import Mapview from "../components/ui/Mapview";
//import Mapview from "../components/ui/Mapview"
//import Map from "../components/ui/Map"

const Details = ({ route }) => {

   const [displayLocations, setDisplayLocations] = useState(true);
   const [displayBudget, setDisplayBudget] = useState(false);

   const handleLocationsClick = () => {
     setDisplayLocations(true);
     setDisplayBudget(false);
   };

   const handleBudgetClick = () => {
     setDisplayLocations(false);
     setDisplayBudget(true);
   };
  return (
    <>
      {!route && "Loading"}

      {route && (
        <div className={styles.dash}>
          <Sidebar />
          <Mapview coordinates={route.coordinates} />

          <Title
            titlefirst={"Route"}
            titlesec={"Result!"}
            tagLine={"Route 1"}
            className={styles.first}
          />
          <div className={styles.secondheader}>
            <div className={styles.tag}>Starting point -</div>
            <div className={styles.line}>Destination</div>
          </div>
          <Card className={styles.floatwindow}>
            <div className={styles.header}>
              <button
                className={`${styles.text} ${
                  displayLocations ? styles.active : ""
                }`}
                onClick={handleLocationsClick}
              >
                Visiting Locations
              </button>
              <button
                className={`${styles.button} ${
                  displayBudget ? styles.active : ""
                }`}
                onClick={handleBudgetClick}
              >
                Budget Calculations
              </button>
            </div>
            {displayLocations && (
              <>
              
                <IteneraryItem
                  label="Wrranambool"
                  type="touristpoint"
                  day={2}
                  item={1}
                  time={"3.30pm"}
                />
                <IteneraryItem
                  label="Wrranambool"
                  type="touristpoint"
                  day={2}
                  item={2}
                  time={"3.30pm"}
                />

                <div className={styles.header}>
                  <div className={styles.text}>Restaurant</div>
                </div>
                <IteneraryItem
                  label="Wrranambool"
                  type="restaurant"
                  day={2}
                  item={1}
                  time={"3.30pm"}
                />
                <IteneraryItem
                  label="Wrranambool"
                  type="restaurant"
                  day={2}
                  item={2}
                  time={"3.30pm"}
                />

                <div className={styles.header}>
                  <div className={styles.text}>Hotels</div>
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
              </>
            )}
            {displayBudget && (
              <>
                <IteneraryItem
                  label="Wrranambool"
                  type="restaurant"
                  day={2}
                  item={1}
                  time={"3.30pm"}
                />

                <IteneraryItem
                  label="Wrranambool"
                  type="restaurant"
                  day={2}
                  item={2}
                  time={"3.30pm"}
                />
              </>
            )}
          </Card>

          {/*<DashboardLayout/>*/}
        </div>
      )}
    </>
  );
};

export default Details;
