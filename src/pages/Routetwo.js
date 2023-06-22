import React from "react"
import styles from "./Routetwo.module.scss"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"
import clock from '../assets/Icons/clock.svg'
import money from '../assets/Icons/money.svg'

import Card from "../components/ui/Card"
//import Mapview from "../components/ui/Mapview"
//import Map from "../components/ui/Map"


const Details = () => {
  return (
    
    
<div className={styles.dash}>
      
    <Sidebar />
    
    <Title 
      titlefirst={"Route"} 
      titlesec={"Result!"}
      tagLine={"Route 1"}
    />
    <Card 
    className={styles.floatwindow}/>
    
    

   
  {/*<DashboardLayout/>*/}

</div>
  );
};

export default Details;
