import React from 'react'
import styles from './Pages.module.css'

export default function Pages({ amountPerPage, totalAmount, pageNumber }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className={styles.numBar}>
      <div className={styles.numContainer}>
        {pageNumbers &&
          pageNumbers.map((num) => {
            return (
              <a
                key={num}
                className={styles.number}
                onClick={() => pageNumber(num)}
              >
                {num}
              </a>
            )
          })}
      </div>
    </nav>
  )
}
