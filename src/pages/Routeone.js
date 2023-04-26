import React from "react"
import styles from "./Routeone.module.scss"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"

import Card from "../components/ui/Card"
import Mapview from "../components/ui/Mapview"


const Details = () => {
  return (
    
    
<div className={styles.dash}>
      
    <Sidebar />
    <div className={styles.mapone}>
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
