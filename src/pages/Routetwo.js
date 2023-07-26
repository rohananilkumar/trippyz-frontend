import React, { useState } from "react";
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
import Button from "../components/ui/Button";
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
  const debugging = true;
  return (
    <>
      {!route && !debugging && "Loading"}

      {(route || debugging) && (
        <div className={styles.dash}>
          <Sidebar />
          {!debugging && <Mapview coordinates={route.coordinates} />}

          <Title
            titlefirst={"Route"}
            titlesec={"Result!"}
            tagLine={"Starting point > Destination"}
            className={styles.result}
          />

          <IteneraryItem />
          <div className={styles.food}>{"food"}</div>
          <Card className={`${styles.floatwindow} ${styles.scrollable}`}>
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
                {!debugging &&
                  route.generatedRoute.map((item, index) => {
                    if (
                      item.break !== "stay" &&
                      item.break !== "breakfast" &&
                      item.break !== "lunch" &&
                      item.break !== "dinner"
                    ) {
                      return (
                        <IteneraryItem
                          key={index}
                          label={item.place}
                          type="touristpoint"
                          day={item.day}
                          item={index + 1}
                          time={`${item.hours || ""}:${item.mins || ""} ${
                            item.hours >= 12 ? "PM" : "AM"
                          }`}
                        />
                      );
                    }
                  })}

                <div className={styles.header}>
                  <div className={styles.text}>Restaurants</div>
                </div>

                {!debugging &&
                  route.generatedRoute.map((item, index) => {
                    if (
                      item.break === "breakfast" ||
                      item.break === "lunch" ||
                      item.break === "dinner"
                    ) {
                      return (
                        <IteneraryItem
                          key={index}
                          label={item.place}
                          type="restaurant"
                          day={item.day}
                          item={index + 1}
                          time={`${item.hours}:${item.mins} ${
                            item.hours >= 12 ? "PM" : "AM"
                          }`}
                        />
                      );
                    }
                  })}

                <div className={styles.header}>
                  <div className={styles.text}>Hotels</div>
                </div>
                {!debugging &&
                  route.generatedRoute.map((item, index) => {
                    if (item.break === "stay") {
                      return (
                        <IteneraryItem
                          key={index}
                          label={item.place}
                          type="hotel"
                          day={item.day}
                          item={index + 1}
                          time={`${item.hours}:${item.mins} ${
                            item.hours >= 12 ? "PM" : "AM"
                          }`}
                        />
                      );
                    }
                  })}
              </>
            )}

            {displayBudget && (
              <>
                {route.generatedRoute.map((item, index) => {
                  if (item.break === "stay") {
                    return (
                      <IteneraryItem
                        key={index}
                        label={item.place}
                        type="hotel"
                        item={index + 1}
                        peopleCount={item.peopleCount}
                        price={item.price}
                      />
                    );
                  }
                })}

                {route.generatedRoute.map((item, index) => {
                  if (
                    item.break === "breakfast" ||
                    item.break === "lunch" ||
                    item.break === "dinner"
                  ) {
                    return (
                      <IteneraryItem
                        key={index}
                        label={item.place}
                        type="restaurant"
                        price={item.distancePrice}
                        item={index + 1}
                      />
                    );
                  }
                })}
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
