import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import { getRandomNumber } from './utils/handleRandom'
import Header from './img/Header.jpg';

const RESIDENTS_PERPAGE = 12;

function App() {
  //Estado que almacena la informacion de la location
  const [location, setLocation] = useState ()
  //Estado que almacena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState ("")
  const [page, setPage] = useState(1) 

  //funcion que se ejecuta en el sumit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  const pagination = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents
  }

  const numbersPage = () => {
    const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PERPAGE);
    const arrayPages = []
    for(let i = 1; i <= quantityPages; i++){
      arrayPages.push(i)
    }
    return arrayPages
  }
  //efecto que se ejecuta en el primer render y cuando cambia nameLocation
  useEffect (() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err)=> console.log())
  }, [nameLocation])

  return (
    <div className="App">
      <img className='Header_img' src={Header}/>
      <form className='Buscador' onSubmit={handleSubmit}>
        <input className='Boton' type="text" id='idLocation' placeholder='Type a location id'/>
        <button className='bton'>Search</button>
      </form>
      <LocationInfo location={location}/>
      <section className='residentList'>
      {
        pagination()?.map(residentUrl => <ResidentCard key={residentUrl}  residentUrl={residentUrl}/>)
      }
      </section>
      <ul>
        {
          numbersPage().map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
      </ul>
    </div>
  )
}

export default App
