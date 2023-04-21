import React from "react"
import styles from "./Sidebar.module.scss"
import Branding from "./Branding"
import PrimaryButton from "./PrimaryButton"
import Username from "./Username"
import line from '../../assets/Icons/Line 1.svg'
import map from '../../assets/Icons/map.svg'
import logout from '../../assets/Icons/log-out.svg'




const Sidebar = () => {
  return (
  
    <div className={styles.in}>
      <Branding className={styles.brand} />
      <Username />
      <img src={logout} alt="signout" className={styles.logout}/>
      <PrimaryButton  
        label={"SignOut"} 
        className={styles.button} />

      <div className={styles.sidebutton}>

          <img src={line} alt="line" className={styles.line}/>
          <h5 className={styles.titleroute}>Route Types</h5>
          
          <img src={map} alt="map" className={styles.mapone}/>
          <PrimaryButton  
          
            label={"Tightly Planned Routes"} 
            className={styles.button} />
          
          <img src={map} alt="map" className={styles.maptwo}/>
          <PrimaryButton  
            label={"Lightly Scheduled Routes"}
            className={styles.button}/>
          
          <img src={map} alt="map" className={styles.mapthree}/>
          <PrimaryButton  
            label={"Route with food"}
            className={styles.button}
          />
          
          <img src={map} alt="map" className={styles.mapfour}/>
          <PrimaryButton  
            label={"Route with food and stay"}
            className={styles.button}
          />
          
      </div>

    </div>
   
  )
}

export default Sidebar
