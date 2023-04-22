import React from 'react'
import styles from './Title.module.scss'

const Title = ({ titlefirst,titlesec, tagLine }) => {
  return (
    
    <div className={styles.title}>
        <div className={styles.firstline}>
             <div className={styles.headerfirst}>{titlefirst}</div>
             <div className={styles.headersecond}>{titlesec}</div>
        </div>
        <div className={styles.tagLine}>{tagLine}</div>
    </div>
    
  )
}

export default Title
