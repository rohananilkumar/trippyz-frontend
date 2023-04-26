import React from "react"
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


const Details = () => {
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
    
      onChange={(x) => {
      console.log(x);
     }}
     className={styles.but}/>

    <h8 className={styles.inquiry}>Where are you starting from?</h8>
    <img src={start} alt="start" className={styles.start}/>
    <LabelledInput 
          onChange={(x) => {
          console.log(x);
        }}
        className={styles.but}/>
    <h8 className={styles.inquiry}>Do you have a start, end time</h8>
    <div className={styles.combine}>
    <img src={yes} alt="yes" className={styles.yes}/>
    <PrimaryButton  
          label={"Yes"}
          className={styles.smallbut}/>
    <img src={no} alt="no" className={styles.no}/>
    <PrimaryButton  
          label={"No"}
          className={styles.smallbut}/>
    </div>
    <h8 className={styles.inquiry}>What is the duration of the trip?</h8>
    <LabelledInput  
              //label={"What is the duration of the trip?"}
              onChange={(x) => {
              console.log(x);
            }}
            className={styles.but}/>

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

export default Details;
