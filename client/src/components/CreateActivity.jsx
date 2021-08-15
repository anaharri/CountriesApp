import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCountries, createActivity } from '../actions'
import styles from './CreateActivity.module.css'

export default function CreateActivity() {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.allCountries)

  const [details, setDetails] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  })

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  function handleChange(e) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    })
  }

  function handleSelect(e) {
    setDetails({
      ...details,
      countries: [...details.countries, e.target.value],
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createActivity(details))
    setDetails({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: [],
    })
    alert('Activity created!')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className={styles.title}>Add Touristic Activity</h1>
          <div className={styles.formSection}>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              className={styles.input}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor='duration'>
              Duration:
            </label>
            <input
              type='text'
              id='duration'
              name='duration'
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor='difficulty'>
              Difficulty:
            </label>
            <select
              id='difficulty'
              name='difficulty'
              className={styles.input}
              onChange={(e) => handleChange(e)}
            >
              <option value=''>Difficulty...</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor='season'>
              Season:
            </label>
            <select
              className={styles.input}
              id='season'
              name='season'
              onChange={(e) => handleChange(e)}
            >
              <option value=''>Season...</option>
              <option value='Summer'>Summer</option>
              <option value='Fall'>Fall</option>
              <option value='Winter'>Winter</option>
              <option value='Spring'>Spring</option>
            </select>
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor='season'>
              Country:
            </label>
            <select
              className={styles.input}
              name='countries'
              onChange={(e) => handleSelect(e)}
              required
            >
              <option value=''>Countries...</option>
              {countries.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <ul>
            <li>{details.countries.map((c) => `${c} | `)}</li>
          </ul>

          <Link to='/countries'>
            <button className={styles.btnBack}>Go back</button>
          </Link>
          <button className={styles.btn} type='submit'>
            Add Activity
          </button>
        </form>
      </div>
    </div>
  )
}
