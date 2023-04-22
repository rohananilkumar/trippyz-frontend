import React from 'react'
import styles from '../layouts/DashboardLayout.module.scss'
import adventure from '../../assets/Vectors/adventure.svg'
import tower from '../../assets/Vectors/tower.svg'

const DashboardLayout = ({children}) => {
  return (
    <div className={styles.dashboardLayout}>
        <div className={styles.inputItem}>
                <div className={styles.content}>{children}</div>

                        <div className={styles.adventure}>
                            <img
                                src={adventure}
                                className={styles.vector1}
                                alt="adventure"
                            />
                        </div>
         </div>

            <div className={styles.tower}>
                <img
                    src={tower}
                    className={styles.vector2}
                    alt="tower"
                />
            </div>
    </div>
  )
}

export default DashboardLayout
