import React from 'react'
import styles from './Card.module.scss'
//import location from '../../assets/Icons/location.svg'

const Card = ({title,imageurl,body}) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={imageurl} alt=""/>
        </div>
        <div className={styles.card_title}>
            {title}

        </div>
        <div className={styles.card_body}>
            <p>{body}</p>
        <div className={styles.btn}>
            <button>
                <a>
                    Food
                </a>
            </button>
            <button>
                <a>
                    Petrol
                </a>
            </button>
            <button>
                <a>
                    Stay
                </a>
            </button>

        </div>


        </div>


      
    </div>
  )
}

export default Card
