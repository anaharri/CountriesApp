import React from 'react'

export default function Error({ text }) {
  return (
    <div>
      <h1>There has been an error...</h1>
      <h2>{text}</h2>
    </div>
  )
}
