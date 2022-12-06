import React from 'react'
import './styles/location.css'

const LocationInfo = ({location}) => {
  
  
  return (
    <article className='location'>
        <h1 className='location__tittle'>{location?.name}</h1>
        
        <ul className='location__list' >
            <li className='location__item'>
              <span className='location__label'>Type: </span>
              <span className='location__value'>{location?.type}</span>
              </li>
            <li className='location__item'>
              <span className='location__label'>Dimension: </span>
              <span className='location__value'>{location?.dimension}</span>
              </li>
            <li className='location__item'>
              <span className='location__label'>Population: </span>
              <span className='location__value'>{location?.residents.length}</span>
              </li>
        </ul>
    </article>
  )
}

export default LocationInfo
