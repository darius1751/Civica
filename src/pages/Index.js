import React, { useState } from 'react'
import Events from '../components/Events';
import '../styles/index.css';
function Index() {
    const [eventType,setEventType] = useState("0");
    const handleChange = (e)=>{
        setEventType(e.target.value);
    }
  return (
    <div>
        <select className='options' value={eventType} onChange={handleChange}>
            <option value='0'>Eventos</option>
            <option value='1'>Eventos agendados</option>
        </select>
        <br/>
        <br/>
        
        <Events type={eventType}/>
    </div>
  )
}

export default Index