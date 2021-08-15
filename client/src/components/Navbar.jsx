import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllCountries } from '../actions'
import styles from './Navbar.module.css'
import Searchbar from './Searchbar'

export default function Navbar({ sort, contFilter, actFilter }) {
  const dispatch = useDispatch()

  function handleClick(e) {
    e.preventDefault()
    dispatch(getAllCountries())
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.earth} onClick={(e) => handleClick(e)}>
          Earth | <span className={styles.byana}>PI</span>
        </h1>

        <Searchbar />
        <div className={styles.filterContainer}>
          {/* filtro por continente */}
          <select className={styles.filter} onChange={(e) => contFilter(e)}>
            <option value='All'>All</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>

          {/* filtro por actividad */}
          <select className={styles.filter} onChange={(e) => actFilter(e)}>
            <option value='All'>Filter by activity...</option>
            <option value='Summer'>Summer</option>
            <option value='Fall'>Fall</option>
            <option value='Winter'>Winter</option>
            <option value='Spring'>Spring</option>
          </select>

          {/* orden por nombre o poblacion */}
          <select className={styles.filter} onChange={(e) => sort(e)}>
            <option value='AZ'>Sort by...</option>
            <option value='AZ'>Name (A-Z)</option>
            <option value='ZA'>Name (Z-A)</option>
            <option value='populationAsc'>Population (asc)</option>
            <option value='populationDesc'>Population (desc)</option>
          </select>
        </div>
      </div>
    </div>
  )
}
