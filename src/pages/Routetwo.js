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

   

    { /*  
   <Map className={styles.mapstyle}/> */ }
    <div className={styles.mapone}>
   
   
      
     { /*  <Card
        className={styles.cardview}
        title={"Route 1"}
        duration={"3 days, 12 hours"}
        expense={"2000"}/>
  */ }
    </div>
    <div className={styles.clock}>
                    <img src={clock} alt="clock"/>
                    <p>3 days, 12 hours</p>
                </div>

                <div className={styles.expense}>
                    <img src={money} alt="money" className={styles.money}/>
                    <p>20000</p>
                </div>
    
    
    <Title 
      titlefirst={"Route"} 
      titlesec={"Result!"}
      tagLine={"Route 1"}
    />
   
  {/*<DashboardLayout/>*/}

</div>
  );
};

export default Details;
