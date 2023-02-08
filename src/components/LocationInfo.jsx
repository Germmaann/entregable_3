import React from 'react'

export const LocationInfo = ({location}) => {
  return (
    <section className='Informaciondelplaneta'>
    <h2>{location?.name}</h2>
    <ul>
      <li><span>Type: </span>{location?.type}</li>
      <li><span>Dimension: </span>{location?.dimension}</li>
      <li><span>Population: </span>{location?.residents.length}</li>
    </ul>
  </section>
  )
}

export default LocationInfo