import React from 'react'
import styles from './Username.module.scss'
import user from '../../assets/Icons/user.svg'

const Username = () => {
  return (
    
    <div className={styles.username}>
        <img src={user} alt="user" className={styles.usericon}/>
        <div>
        <h2>Sidharth Malhothra</h2>
        <p>Guest User</p>
        </div>


    </div>
    
  )
}

export default Username
