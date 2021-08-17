import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to planet Earth!</h1>
        <h3 className={styles.text}>
          Would you like to know it a little better? <br /> Come on in...
        </h3>
        <Link to='/countries'>
          <button className={styles.btn}>Let's go!</button>
        </Link>
        <p className={styles.footer}>A project by Ana Harrington</p>
      </div>
    </div>
  )
}
