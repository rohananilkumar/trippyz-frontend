import React, { useState } from "react";
import styles from "./Dashboard.module.scss"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"
import LabelledInput from "../components/ui/LabelledInput"
import PrimaryButton from "../components/ui/PrimaryButton"
import calendar from "../assets/Icons/calendar.svg"
import yes from "../assets/Icons/yes.svg"
import no from "../assets/Icons/no.svg"
import start from "../assets/Icons/start.svg"
import dest from "../assets/Icons/dest.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Details = () => {

  {/*
      const [startDate, setStartDate] = useState(null);
      const [endDate, setEndDate] = useState(null);
    
      const handleStartDateChange = (date) => {
        setStartDate(date);
      };
    
      const handleEndDateChange = (date) => {
        setEndDate(date);
      };

      
       const handleSubmit = () => {
            console.log("Start Date:", startDate);
            console.log("End Date:", endDate);
            // Perform further actions with the selected dates
      };

    */}

    const [destination, setDestination] = useState("");
    const [startingPoint, setStartingPoint] = useState("");
    const [duration, setDuration] = useState("");
    const [radius, setRadius] = useState("");
    const navigate = useNavigate();



    const handleSubmit = () => {
      const data = {
        destination,
        startingPoint,
        duration,
        radius
      };
    
      // Perform further actions with the form data, such as sending it to an API
      axiosInstance.post("routes/get-route", data)
        .then(response => {
          // Handle the response if needed
        })
        .catch(error => {
          // Handle errors if any
        });
    
      // Navigate to the next page using React Router's history object
      <Navigate to="/budget_details" />;
      navigate("/budget_details");
    };
    


  return (
    
    
    <div className={styles.dash}>
      
     <Sidebar />
     <DashboardLayout/>
     <Title 
      titlefirst={"Hello"} 
      titlesec={"There!"}
      tagLine={"Lets collect some data to plan your route"}/>
    
     
     

<div className={styles.buttons}>
    <h8 className={styles.inquiry}>Where are you headed to?</h8>
    <img src={dest} alt="destination" className={styles.dest}/>
    <LabelledInput
      onChange={(event) => setDestination(event.target.value)}
      className={styles.but}
    />

    <h8 className={styles.inquiry}>Where are you starting from?</h8>
    <img src={start} alt="start" className={styles.start}/>
    <LabelledInput
      onChange={(event) => setStartingPoint(event.target.value)}
      className={styles.but}
    />
    
    <h8 className={styles.inquiry}>What is the duration of the trip?</h8>
    <LabelledInput
      onChange={(event) => setDuration(event.target.value)}
      className={styles.but}
    />

      <h8 className={styles.inquiry}>What is the radius coverage (km)?</h8>
      <LabelledInput
        onChange={(event) => setRadius(event.target.value)}
        className={styles.but}
      />
{/*
<h8 className={styles.inquiry}>What is the start, end date?</h8>
    <div className={styles.combine}>
    <img src={calendar} alt="calendar" className={styles.calendarstart}/>
    <PrimaryButton  
          label={"Start"}
          className={styles.smallbut}/>
    <img src={calendar} alt="calendar" className={styles.calendarend}/>
    <PrimaryButton  
          label={"End"}
          className={styles.smallbut}/>
    </div>

    <PrimaryButton  
          label={"Next >"}
          className={styles.next}
          to={"/budget_details"}
          
          />



    </div>

   </div>
  );
};



      <h8 className={styles.inquiry}>Select Start and End Dates</h8>
      <div className={styles.combine}>
      <div>
        <label>Start Date:</label>
        
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          className={styles.datepicker}
          //placeholderText="Select start date"
        />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          className={styles.datepicker}
          //placeholderText="Select end date"
        />
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>*/}
    {/*
      <PrimaryButton  
          label={"Next >"}
          className={styles.next}
          to={"/budget_details"}/>
    */}

      <PrimaryButton
        label={"Next >"}
        className={styles.next}
        onClick={handleSubmit}
      />
          
   </div>
   </div>
  );
};
export default Details;
