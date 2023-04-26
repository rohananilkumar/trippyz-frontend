import React from "react"
import styles from "./Routeresult.module.scss"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import location from '../assets/Icons/location.svg'
import Mapview from "../components/ui/Mapview"


const Details = () => {
  return (
    
    
    <div className={styles.dash}>
      
     <Sidebar />
<div>
<Mapview/>
</div>

    <div>
        <h1>Heloo</h1>
        <Button 
        label={"click"}
        to={"/dashboard"}/>
    </div>



     <Title 
      titlefirst={"Route"} 
      titlesec={"Results"}
      />
    
    <DashboardLayout/>
  
     

{/*<div className={styles.cardview}>

    <Card
    title={"Choice1"}
    imageurl={location}
    body={"dhbjxnasmhuin"}/>
 


  </div>*/}
<div>
    <h1>Heloo</h1>
    <Button 
    label={"click"}/>
</div>

   </div>
  );
};

export default Details;




  