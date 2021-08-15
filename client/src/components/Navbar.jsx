import React from 'react'
import styles from './Navbar.module.css'
import Searchbar from './Searchbar'

export default function Navbar({ sort, filter }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.earth}>
          Earth | <span className={styles.byana}>PI</span>
        </h1>

        <Searchbar />
        <div className={styles.filterContainer}>
          {/* filtro por continente */}
          <select className={styles.filter} onChange={(e) => filter(e)}>
            <option value='All'>All</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>

          {/* orden por nombre o poblacion */}
          <select className={styles.filter} onChange={(e) => sort(e)}>
            <option value='AZ'>Alphabetic (A-Z)</option>
            <option value='ZA'>Alphabetic (Z-A)</option>
            <option value='populationAsc'>By population (asc)</option>
            <option value='populationDesc'>By population (desc)</option>
          </select>
        </div>
      </div>
    </div>
  )
}
