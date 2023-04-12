import React from "react"
import styles from "./Dashboard.module.scss"
import Sidebar from "../components/ui/Sidebar"
import Header from "../components/ui/Header"

const Details = () => {
  return (
    <div className={styles.dash}>
     <Sidebar />
     <div>
      <Header title="Hello There !"
        className={styles.header}/>
      <Header tagLine={"Let's collect some data to plan your route"}
        className={styles.tagline}/>
     </div>

   </div>
  )
}

export default Details
