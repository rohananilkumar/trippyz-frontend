import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Welcome.module.scss";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Sidebar from "../components/ui/Sidebar";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import LabelledInput from "../components/ui/LabelledInput";

import axiosInstance from "../utils/axios";
import { getObjectFromLocalStorage } from "../utils/localStorage";

import Card from "../components/ui/Card";
import Mapview from "../components/ui/Mapview";
import MapTest from "./maptest";
import { useNavigate } from "react-router-dom";
//import Map from "../components/ui/Mapview";

const Details = ({ onServerResponse }) => {
  const [dest, setDestination] = useState("");
  const [start, setStartingPoint] = useState("");
  const [duration, setDuration] = useState("");
  const [radius, setRadius] = useState("");
  //const [radius, setMileage] = useState("");
  const [peopleCount, setPeople] = useState("");
  //const [room, setRoom] = useState("");
  const [restaurantRatingPreference, setRating] = useState("");
  const [routeType, setRouteType] = useState("");
  const [budgetType, setBudget] = useState("");
  const [mileage, setMileage] = useState();
  const [vehicleType, setVehicleType] = useState("");
  const [considerations, setConsiderations] = useState([]);
  const navigate = useNavigate();

  {
    /*
  const [data, setData] = useState({
    dest: undefined,
    start: undefined,
    duration: undefined,
    radius: undefined,
    budget: "23423",
    considerations: ["food", "stay"],
    restaurantRatingPreference: 4,
    roomForError: 40,
    routeType: "normal-scheduled",
    peopleCount: 2,
  });
*/
  }
  const [serverResponse, setServerResponse] = useState();

  const data = {
    dest,
    start,
    duration,
    radius,
    restaurantRatingPreference,
    routeType,
    peopleCount,
    budgetType,
    vehicleType,
  };

  const [activeSet, setActiveSet] = useState(1);

  const handleNext = async () => {
    if (activeSet === 4) {
      console.log(data);
      await sendDataToBackend();
      navigate("/routeone");
    }
    setActiveSet(activeSet + 1);
  };

  // const [coordinates, setCoordinates] = useState(null);

  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    if (coordinates === undefined) {
      console.log("Coordinates:", coordinates);
    }
  }, [coordinates]);

  const sendDataToBackend = async () => {
    console.log("sending server request");
    try {
      const response = await axiosInstance.post("routes/get-route", data, {
        headers: {
          "x-auth-token": getObjectFromLocalStorage("token"),
        },
      });
      setServerResponse(response.data);
      onServerResponse(response.data);
      console.log(response.data);

      const receivedCoordinates = response.data.coordinates;

      // Set the coordinates in the state
      setCoordinates(receivedCoordinates);
      //setCoordinates(prevCoordinates => [...prevCoordinates, ...receivedCoordinates]);

      // Handle the coordinates as needed
      //console.log("Coordinates:", receivedCoordinates);
      //console.log("Coordinates:", coordinates);
      // const coordinates = response.data.coordinates;

      // Handle the coordinates as needed
      //console.log("Coordinates:", coordinates);
      // Handle the response from the backend if needed
    } catch (error) {
      console.log("Error:", error.response);
      // Handle any errors that occurred during the API call
    }
  };
  {
    /*
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setData((prevData) => ({
    
    ...prevData,
    [name]: value,
    
  }));
};
*/
  }

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
    console.log(event.target.value);
  };

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
    console.log(event.target.value);
  };

  const renderFields = (setNumber) => {
    const routeTypes = [
      "lightly-scheduled",
      "tightly-scheduled",
      "normal-scheduled",
    ];
    if (setNumber === 1) {
      return (
        <div className={styles.dash}>
          <Sidebar />
          <DashboardLayout />
          <Title
            //  titlefirst={"Hello"}
            titlesec={"Hola!"}
            tagLine={"Please select your preferred route configuration"}
            className={styles.welcome}
          />

          <div className={styles.buttons}>
            <PrimaryButton
              label={"Lightly Planned Routes"}
              className={styles.smallbut}
              onClick={() => {
                setRouteType("lightly-scheduled");
                handleNext();
              }}
            />

            <PrimaryButton
              label={"Tightly Planned Routes"}
              className={styles.smallbut}
              onClick={() => {
                setRouteType("tightly-scheduled");
                handleNext();
              }}
            />

            <PrimaryButton
              label={"Normal Planned Routes"}
              className={styles.smallbut}
              onClick={() => {
                setRouteType("normal-scheduled");
                handleNext();
              }}
            />

            <PrimaryButton
              label={"I like to be surprised"}
              className={styles.next}
              onClick={() => {
                const random = Math.floor(Math.random() * routeType.length);
                setRouteType(routeType[random]);
                handleNext();
              }}
              //to={"/dashboard"}
            />
          </div>
        </div>
      );
    } else if (setNumber === 2) {
      return (
        <div className={styles.dash}>
          <Sidebar />
          <DashboardLayout />
          <Title
            titlefirst={"Hello"}
            titlesec={"There!"}
            tagLine={"Lets collect some data to plan your route"}
          />

          <div className={styles.buttons}>
            <h8 className={styles.inquiry}>Where are you headed to?</h8>
            {/* <img src={dest} alt="destination" className={styles.dest} />*/}
            <LabelledInput
              onChange={(event) => setDestination(event.target.value)}
              className={styles.but}
              value={dest}
            />

            <h8 className={styles.inquiry}>Where are you starting from?</h8>
            {/* <img src={start} alt="start" className={styles.start} />*/}
            <LabelledInput
              onChange={(event) => setStartingPoint(event.target.value)}
              className={styles.but}
              value={start}
            />

            <h8 className={styles.inquiry}>
              What is the duration (days) of the trip?
            </h8>
            <LabelledInput
              onChange={(event) => setDuration(event.target.value)}
              className={styles.but}
              value={duration}
              type={"number"}
            />

            <h8 className={styles.inquiry}>
              What is the radius coverage (km)?
            </h8>
            <LabelledInput
              onChange={(event) => setRadius(event.target.value)}
              className={styles.but}
              value={radius}
              type={"number"}
            />

            <PrimaryButton
              label={"Next >"}
              className={styles.next}
              onClick={handleNext}
            />
          </div>
        </div>
      );
    } else if (setNumber === 3) {
      return (
        <div className={styles.dash}>
          <Sidebar />
          <DashboardLayout />
          <Title
            titlefirst={"Budget"}
            titlesec={"Details!"}
            tagLine={"Lets talk money!"}
            className={styles.budget}
          />

          {/*      
   
   <div className={styles.buttons}>
       <h8 className={styles.inquiry}>What is your total trip budget?</h8>
       <img src={dollar} alt="dollar" className={styles.dollar}/>
        <LabelledInput  
       
         onChange={(x) => {
         console.log(x);
        }}
        className={styles.but}/>

      */}

          <div className={styles.buttons}>
            <h8 className={styles.inquiry}>
              What kind of budget are you looking at?
            </h8>
            <select
              value={budgetType}
              onChange={handleBudgetChange}
              className={styles.selectbut}
            >
              <option value="">Select budget</option>
              <option value="expensive">Expensive</option>
              <option value="cheap">Cheap</option>
              <option value="moderate">Moderate</option>
            </select>

            <h8 className={styles.inquiry}>Number of people for the trip</h8>
            {/* <img src={user} alt="user" className={styles.user}/>*/}
            <LabelledInput
              onChange={(event) => setPeople(event.target.value)}
              className={styles.but}
              value={peopleCount}
              type={"number"}
            />
            <h8 className={styles.inquiry}>
              Budget considerations will be done base on
            </h8>

            {/*
       <PrimaryButton  
             label={"Food Price"}
             className={styles.smallbut}/>
          */}
            <PrimaryButton
              label={"Stay Price"}
              className={styles.smallbut}
              // onClick={()=>{
              //   setConsiderations(x=>{
              //     if(x.includes("stay"))
              //   })
              // }}
            />
            {/*
   <PrimaryButton  
             label={"Ticket Price"}
             className={styles.smallbut}/>
        */}
            <PrimaryButton
              label={"Petrol Budget"}
              className={styles.smallbut}
            />

            <PrimaryButton
              label={"Next >"}
              className={styles.next}
              onClick={handleNext}
            />
          </div>
        </div>
      );
    } else if (setNumber === 4) {
      return (
        <div className={styles.dash}>
          <Sidebar />
          <DashboardLayout />
          <Title
            //  titlefirst={"Hello"}
            titlesec={"Parameters"}
            tagLine={"Ok we need a bit more info"}
          />

          <div className={styles.buttons}>
            <h8 className={styles.inquiry}>
              What's your average mileage (kmpl)?
            </h8>
            {/* <img src={truck} alt="truck" className={styles.truck} />*/}
            <LabelledInput
              onChange={(event) => setMileage(parseInt(event.target.value))}
              className={styles.but}
              value={mileage}
              type={"number"}
            />

            <h8 className={styles.inquiry1}>Vehicle Type</h8>
            {/* <img src={percentage} alt="percentage" className={styles.percentage}/>*/}
            <select
              value={vehicleType}
              onChange={handleVehicleTypeChange}
              className={styles.selectbut}
            >
              <option value="">Select Type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
            </select>

            <h8 className={styles.inquiry}>Restaurant rating preferences</h8>
            {/* <img src={star} alt="star" className={styles.star} />*/}
            <LabelledInput
              //label={"What is the duration of the trip?"}
              onChange={(event) => setRating(event.target.value)}
              className={styles.but}
              value={restaurantRatingPreference}
              type={"number"}
            />

            <PrimaryButton
              label={"See my routes! >"}
              className={styles.next}
              onClick={handleNext}

              // to={"/routeone"}
            />
          </div>
        </div>
      );
    } else if (setNumber === 5) {
      return (
        <div className={styles.dash}>
          <Sidebar />

          <MapTest className={styles.mapstyle} coordinates={coordinates} />
          {/*
       
        <Card
          className={styles.cardviewright}
          title={"Route 3"}
          duration={"3 days, 12 hours"}
          expense={"2000"}
        />


        <Card
          className={styles.cardviewleft}
          title={"Route 3"}
          duration={"3 days, 12 hours"}
          expense={"2000"}
        />
      */}

          {/*
        <div className={styles.mapone}>
          <Mapview 
          className={styles.mapstyle} 
          coordinates={coordinates}/>
  
          <Card
            className={styles.cardview}
            title={"Route 2"}
            duration={"3 days, 12 hours"}
            expense={"2000"}
          />
        </div>
    */}
          <Title titlefirst={"Route"} titlesec={"Result!"} />

          {/*<DashboardLayout/>*/}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {renderFields(activeSet)}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default Details;
