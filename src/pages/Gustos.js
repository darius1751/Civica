import React, { useEffect, useState } from 'react';
import Gusto from '../components/Gusto';
import { options } from '../helpers/helpGetGustos';
import { misGustos } from '../helpers/helpGetMisGustos';
import '../styles/gustos.css';
const Gustos = ()=> {
  const [gustos,setGustos] = useState([]);
  useEffect(()=>{
    setGustos(misGustos);
  },[]);
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