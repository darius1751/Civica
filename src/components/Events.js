import React from 'react';
import { events } from '../helpers/helpGetEvents';
import Event from './Event';

const Events = ({type})=> {
    return (
        <div className='events'>
            <p>Recientes</p>
            {
                events.type[type].map(event=>{
                    return (
                        <div key={Date.now()+Math.random()}>
                            <Event event={event} key={event.id}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Events;