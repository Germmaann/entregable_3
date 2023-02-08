import React from 'react'
import ResidentCard from './ResidentCard'
import axios from 'axios'


export const ResidenList = ({pagination}) => {
  return (
    <section className='InformacionPaginacion'>

      <h4>{pagination()?.map(residentUrl => <ResidentCard key={residentUrl}  residentUrl={residentUrl}/>)}</h4>
    </section>
    )
}

export default ResidenList