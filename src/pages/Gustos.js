import React, { useState } from 'react';
import Gusto from '../components/Gusto';
import '../styles/gustos.css';
const options = [
  {id:1,name:'Musica'},
  {id:2,name:'Tecnologia'},
  {id:3,name:'Literatura'},
  {id:4,name:'Teatro'},
  {id:5,name:'Fitness'},
  {id:6,name:'Cine'}
]
const Gustos = ()=> {
  const [gustos,setGustos] = useState([]);
  return (
    <div className=''>
        <div className='back'>
          Elige tus gustos e intereses
        </div>
        <div className='content'>
          {
            options.map(gusto=>{
              return (
                <Gusto gusto = {gusto} key={gusto.id} setGustos={setGustos} gustos={gustos}/>
              )
          })}
        </div>
    </div>
  )
}
export default Gustos;