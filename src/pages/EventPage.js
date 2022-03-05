import React from 'react'
import mapa from '../mapa.png'
import '../styles/index.css'
const EventPage = ({name})=> {
  return (
    <div>
      <div className='options'>Evento Estacion</div>
      <img src={mapa} alt='mapa' className='mapa'/>
      <header className='header'>

      </header>
    </div>
  )
}
export default EventPage;