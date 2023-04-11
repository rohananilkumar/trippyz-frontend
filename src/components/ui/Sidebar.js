import React from "react"
import styles from "./Sidebar.module.scss"
import Branding from "./Branding"
import Signoutbutton from "./Signoutbutton"
import PrimaryButton from "./PrimaryButton"

import {FaSignOutAlt} from "react-icons/fa"
import {BiMapAlt} from "react-icons/bi"


const Sidebar = () => {
  return (
    
    <div className={styles.in}>
    <Branding />
    <FaSignOutAlt />
    <Signoutbutton />
    <h5>Route Types</h5>
    <BiMapAlt />
    <PrimaryButton  
      label={"Tightly Planned Routes"} 
      className={styles.button} />
    <BiMapAlt />
    <PrimaryButton  
      label={"Lightly Scheduled Routes"}
      className={styles.button}/>
    <BiMapAlt />
    <PrimaryButton  
      label={"Route with food"}
      className={styles.button}
     />
    <BiMapAlt />
    <PrimaryButton  
      label={"Route with food and stay"}
      className={styles.button}
     />
    
    

    </div>
    
  )
}

export default Sidebar
