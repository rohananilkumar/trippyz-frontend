import React from 'react'
import styles from './Card.module.scss'
import clock from '../../assets/Icons/clock.svg'
import money from '../../assets/Icons/dollar-sign.svg'

const Card = ({title,imageurl,duration,expense,className}) => {
  return (
    <div className={`${styles.card} ${className}`}>
        <div className={styles.image}>
            <img src={imageurl} alt=""/>
        </div>
        <div className={styles.contents}>
            <div className={styles.card_title}>
                {title}
            </div>
            <div className={styles.card_body}>
                <div className={styles.clock}>
                    <img src={clock} alt="clock"/>
                    <p>{duration}</p>
                </div>

                <div className={styles.expense}>
                    <img src={money} alt="money" className={styles.money}/>
                    <p>{expense} (on budget)</p>
                </div>

                <div className={styles.btn}>
                    <button className={styles.smallbut}>
                        <a>
                            Food
                        </a>
                    </button>
                    <button className={styles.smallbut}>
                        <a>
                            Petrol
                        </a>
                    </button>
                    <button className={styles.smallbut}>
                        <a>
                            Stay
                        </a>
                    </button>

                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Card
