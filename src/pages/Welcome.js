import React from "react"
import styles from "./Welcome.module.scss"
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
    //  titlefirst={"Hello"} 
      titlesec={"Hola!"}
      tagLine={"Please select your preferred route configuration"}
      className={styles.welcome}/>
    
     
     

<div className={styles.buttons}>
    
    

    
    
  
   
    <PrimaryButton  
          label={"Tightly Planned Routes"}
          className={styles.smallbut}/>

    <PrimaryButton  
          label={"Lightly Planned Routes"}
          className={styles.smallbut}/>

<PrimaryButton  
          label={"Lightly Planned Routes"}
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
