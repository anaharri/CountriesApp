import axios from 'axios'

export function getAllCountries() {
  return async (dispatch) => {
    const countries = await axios.get('http://localhost:3001/countries')
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: countries.data,
    })
  }
}

export function getCountriesByName(name) {
  return async (dispatch) => {
    try {
      const countriesByName = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      )
      return dispatch({
        type: 'GET_COUNTRIES_BY_NAME',
        payload: countriesByName.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getCountryDetails(id) {
  return async (dispatch) => {
    try {
      const details = await axios.get(`http://localhost:3001/countries/${id}`)
      return dispatch({
        type: 'GET_COUNTRY_DETAILS',
        payload: details.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function filterByContinent(payload) {
  return {
    type: 'FILTER_BY_CONTINENT',
    payload,
  }
}

export function filterByActivity(payload) {
  return {
    type: 'FILTER_BY_ACTIVITY',
    payload,
  }
}


export function filterByActivityName(payload) {
  return {
    type: 'FILTER_BY_ACTIVITY_NAME',
    payload,
  }
}

export function sort(payload) {
  return {
    type: 'SORT',
    payload,
  }
}

export function createActivity(details) {
  return async function (dispatch) {
    const newActivity = await axios.post(
      'http://localhost:3001/activity',
      details
    )
    console.log(newActivity)
    return newActivity
  }
}
