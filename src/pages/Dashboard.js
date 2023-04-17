import React from "react"
import styles from "./Dashboard.module.scss"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"
import LabelledInput from "../components/ui/LabelledInput"


const Details = () => {
  return (
    <div className={styles.dash}>
     <Sidebar />
     <Title 
      titlefirst={"Hello"} 
      titlesec={"There!"}
      tagLine={"Lets collect some data to plan your route"}/>

<div className={styles.buttons}>
     <LabelledInput 
      
      label={"Where are you headed to?"}
      onChange={(x) => {
      console.log(x);
     }}
     className={styles.but}/>

    <LabelledInput 
          
          label={"Where are you starting from?"}
          onChange={(x) => {
          console.log(x);
        }}
        className={styles.but}/>

    <LabelledInput 
              
              label={"What is the duration of the trip?"}
              onChange={(x) => {
              console.log(x);
            }}
            className={styles.but}/>
    </div>

   </div>
  )
}

export default Details
