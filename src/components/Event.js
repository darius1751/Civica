import React from 'react';
import '../styles/index.css'
import calender from '../calender.png';
const Event = ({event}) => {
    return (
        <div>
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
