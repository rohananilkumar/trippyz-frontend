import React from "react"
import styles from "./Sidebar.module.scss"
import Branding from "./Branding"
import Signoutbutton from "./Signoutbutton"
import Button1 from "./Button1"
import Button2 from "./Button2"
import Button3 from "./Button3"
import Button4 from "./Button4"
import {FaSignOutAlt} from "react-icons/fa"

const Sidebar = () => {
  return (
    <div>
    <Branding />
    <FaSignOutAlt />
    <Signoutbutton />
    <h5>Route Types</h5>
    <Button1 />
    <Button2 />
    <Button3 />
    <Button4 />
    
    </div>
    
  )
}

export default Sidebar
