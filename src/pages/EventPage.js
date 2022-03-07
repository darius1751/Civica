import React, { useContext, useEffect, useState } from 'react';
import mapa from '../mapa.png';
import '../styles/index.css';
import info from '../info.png';
import share from '../share.png';
import love from '../love.png';
import loveLike from '../loveLike.png';
import { eventContext } from '../context/EventContext';
import { useHistory } from 'react-router-dom';
import Modal from '../components/Modal';
const EventPage = ()=> {
  const {event} = useContext(eventContext);
  const [loveState,setLove] = useState(0);
  const [modal, setModal] = useState(false);
  const {name} = event;
  const history = useHistory();
  useEffect(()=>{
    if(!name)
      history.push('/');
  },[name,history]);
  const handleLike = ()=>{
    if (!loveState)
      setLove(1)
    else
      setLove(0)
  };
  const handleInfo = ()=>{
    setModal(true)
  }
  const handleClose = ()=>setModal(false);
  return (
    <div>
      <header className='header'>
          {name}
      </header>
      <img src={mapa} alt='mapa' className='mapa'/>
      {modal && <Modal title='Detalles' message={event.description} handleClose={handleClose}/>}
      <footer className='footer'>
        <img src={info} alt='info' className='icon-i' onClick={handleInfo}/>
        <img src={!loveState?love:loveLike} alt='love' className='icon' onClick={handleLike}/>
        <img src={share} alt='share' className='icon'/>
      </footer>
      {/**<Modal/>**/}
    </div>
  )
}
export default EventPage;