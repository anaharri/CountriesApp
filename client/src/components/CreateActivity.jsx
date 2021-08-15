import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCountries, createActivity } from '../actions'

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
  }

  return (
    <div>
      <h1>Add Touristic Activity</h1>

      <Link to='/countries'>
        <button>Go back</button>
      </Link>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor='duration'>Duration:</label>
        <input
          type='text'
          id='duration'
          name='duration'
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor='difficulty'>Difficulty:</label>
        <select
          id='difficulty'
          name='difficulty'
          onChange={(e) => handleChange(e)}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <br />
        <label htmlFor='season'>Season:</label> <br />
        <select id='season' name='season' onChange={(e) => handleChange(e)}>
          <option value='Summer'>Summer</option>
          <option value='Fall'>Fall</option>
          <option value='Winter'>Winter</option>
          <option value='Spring'>Spring</option>
        </select>
        <select name='countries' onChange={(e) => handleSelect(e)} required>
          {countries.map((c) => (
            <option value={c.id}>{c.name}</option>
          ))}
        </select>
        <ul>
          <li>{details.countries.map((c) => `${c} | `)}</li>
        </ul>
        <button type='submit'>Add Activity</button>
      </form>
    </div>
  )
}
