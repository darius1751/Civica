import React, { useContext } from 'react';
import '../styles/index.css'
import calender from '../calender.png';
import { SAVE } from '../action/EventReducerTYPES';
import { useHistory } from 'react-router-dom';
import { eventContext } from '../context/EventContext';
const Event = ({event}) => {
    const history = useHistory();
    const {dispatchEvent} = useContext(eventContext);
    
    const handleClick = (e)=>{
        dispatchEvent({type:SAVE,payload:event})
        history.push('/evento');
    }
    return (
        <div onClick={handleClick}>
            <img src={calender} alt='calender' className='calender'/>
            <header className='event-name'>{event.name}</header>
            <div className='event'>
                <article className='event-direction'>
                    {event.direction}
                </article>
            </div>
        </div>
    );
}

export default Event;
