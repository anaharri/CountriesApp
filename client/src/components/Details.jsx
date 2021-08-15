import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryDetails } from '../actions'

export default function Details({ country }) {
  const dispatch = useDispatch()
  const details = useSelector((state) => state.countryDetail)

  useEffect(() => {
    dispatch(getCountryDetails(country))
  })

  return (
    <div>
      <img alt='flag' src={details.flag} />
      <h1>
        {details.name} ({details.id})
      </h1>
      <h2>
        {details.continent}
        {details.subregion ? ' | ' + details.subregion : null}
      </h2>
      <h4>Capital: {details.capital}</h4>
      <h4>Population: {details.population}</h4>
      <h4>Area: {details.area} km</h4>

      <h4>Activities:</h4>
      <ul>
        {details.activities &&
          details.activities.map((act) => <li>{act.name}</li>)}
      </ul>
    </div>
  )
}
