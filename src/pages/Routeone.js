import React from "react"
import styles from "./Routeone.module.scss"
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
import Card from "../components/ui/Card"
import Mapview from "../components/ui/Mapview"


const Details = () => {
  return (
    
    
<div className={styles.dash}>
      
    <Sidebar />
    <div>
    <Mapview
        className={styles.mapstyle}/>
    
      
        <Card
        className={styles.cardview}
        title={"Route 1"}
        duration={"3 days, 12 hours"}
        expense={"2000"}/>
    
    </div>
    
   
    <Title 
      titlefirst={"Route"} 
      titlesec={"Result!"}
    />
   
  {/*<DashboardLayout/>*/}

</div>
  );
};

export default Details;
