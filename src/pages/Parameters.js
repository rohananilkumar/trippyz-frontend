import React from "react"
import styles from "./Parameters.module.scss"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"
import LabelledInput from "../components/ui/LabelledInput"
import PrimaryButton from "../components/ui/PrimaryButton"
import truck from "../assets/Icons/truck.svg"
import star from "../assets/Icons/star.svg"
import axiosInstance from "../utils/axios";
//import percentage from "../assets/Icons/%.svg"


const Details = () => {
  return (
    
    
    <div className={styles.dash}>
      
     <Sidebar />
     <DashboardLayout/>
     <Title 
    //  titlefirst={"Hello"} 
      titlesec={"Parameters"}
      tagLine={"Ok we need a bit more info"}/>
    
     
     

<div className={styles.buttons}>
    <h8 className={styles.inquiry}>What's your average mileage?</h8>
    <img src={truck} alt="truck" className={styles.truck}/>
     <LabelledInput  
    
      onChange={(x) => {
      console.log(x);
     }}
     className={styles.but}/>

    <h8 className={styles.inquiry}>How much room for budget?(%)</h8>
   {/* <img src={percentage} alt="percentage" className={styles.percentage}/>*/}
    <LabelledInput 
          onChange={(x) => {
          console.log(x);
        }}
        className={styles.but}/>
    
    <h8 className={styles.inquiry}>Restaurant rating preferences</h8>
    <img src={star} alt="star" className={styles.star}/>
    <LabelledInput  
              //label={"What is the duration of the trip?"}
              onChange={(x) => {
              console.log(x);
            }}
            className={styles.but}/>


    <PrimaryButton  
          label={"See my routes! >"}
          className={styles.next}
          to={"/route_result_one"}
          
          />



    </div>

   </div>
  );
};

export default Details;

