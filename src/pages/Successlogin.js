import React from 'react'
import Branding from '../components/ui/Branding'
import Header from '../components/ui/Header'
import done from '../assets/Icons/done.svg'
import styles from './Successlogin.module.scss'
import PrimaryButton from '../components/ui/PrimaryButton'
import SignIn from './SignIn'
const Successlogin = () => {
  return (
    <div>
      <Branding/>
      <Header title="Done!" tagLine={"Your account has been created"}/>
      <img src={done} alt="done" className={styles.done}/>
      <PrimaryButton
        label={"Signin"}
        onClick={() => {}}
        className={styles.cta}
      />
    </div>
  )
}

export default Successlogin
