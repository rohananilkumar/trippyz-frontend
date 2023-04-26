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
import Card from "../components/ui/Card"
import Mapview from "../components/ui/Mapview"


const Details = () => {
  return (
    
    
    <div className={styles.dash}>
      
     <Sidebar />
     
 
     
     <div className={styles.cardview}>
    {/*<Mapview/>*/}
        <Card
        title={"Route 1"}
        // imageurl={location}
        body={"dhbjxnasmhuin"}/>



</div>
<div>

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
