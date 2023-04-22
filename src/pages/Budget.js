import React from "react"
import styles from "./Budget.module.scss"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"
import LabelledInput from "../components/ui/LabelledInput"
import PrimaryButton from "../components/ui/PrimaryButton"
import user from "../assets/Icons/users.svg"
import dollar from "../assets/Icons/dollar-sign.svg"


const Details = () => {
  return (
    
    
    <div className={styles.dash}>
      
     <Sidebar />
     <DashboardLayout/>
     <Title 
      titlefirst={"Budget"} 
      titlesec={"Details!"}
      tagLine={"Lets talk money!"}
      className={styles.budget}/>
    
     
     

<div className={styles.buttons}>
    <h8 className={styles.inquiry}>What is your total trip budget?</h8>
    <img src={dollar} alt="dollar" className={styles.dollar}/>
     <LabelledInput  
    
      onChange={(x) => {
      console.log(x);
     }}
     className={styles.but}/>

    <h8 className={styles.inquiry}>Number of people for the trip</h8>
    <img src={user} alt="user" className={styles.user}/>
    <LabelledInput 
          onChange={(x) => {
          console.log(x);
        }}
        className={styles.but}/>
    <h8 className={styles.inquiry}>What all should we add for the budget?</h8>
    
    


   
   
    <PrimaryButton  
          label={"Food Price"}
          className={styles.smallbut}/>
   
    <PrimaryButton  
          label={"Stay Price"}
          className={styles.smallbut}/>

<PrimaryButton  
          label={"Ticket Price"}
          className={styles.smallbut}/>
   
    <PrimaryButton  
          label={"Petrol Budget"}
          className={styles.smallbut}/>
    

    <PrimaryButton  
          label={"Next >"}
          className={styles.next}
          />



    </div>

   </div>
  );
};

export default Details;

