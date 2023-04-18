import React from "react"
import styles from "./Sidebar.module.scss"
import Branding from "./Branding"
//import Signoutbutton from "./Signoutbutton"
import PrimaryButton from "./PrimaryButton"
//import { IconContext } from "react-icons"
import Username from "./Username"

import {FaSignOutAlt} from "react-icons/fa"
import {BiMapAlt} from "react-icons/bi"


const Sidebar = () => {
  return (
   // <IconContext.Provider value={{  }}>
    <div className={styles.in}>
    <Branding className={styles.brand} />
    <Username />
    <FaSignOutAlt />
    <PrimaryButton  
      label={"SignOut"} 
      className={styles.button} />
    <div className={styles.sidebutton}>
    <h5 className={styles.titleroute}>Route Types</h5>
    
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

    </div>
   //</IconContext.Provider>
  )
}

export default Sidebar
