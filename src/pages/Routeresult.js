import React from "react"
import styles from "./Dashboard.module.scss"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"

const Details = () => {
  return (
    
    
    <div className={styles.dash}>
      
     <Sidebar />
     <DashboardLayout/>
     <Title 
      titlefirst={"Route"} 
      titlesec={"Results"}
      />
    
     
     



    

   </div>
  );
};

export default Details;
