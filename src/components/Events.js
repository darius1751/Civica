import React from 'react';
import { useHistory } from 'react-router-dom';
import Event from './Event';

const Events = ({type})=> {
    const history = useHistory();
    const events = {
        type:[
            [
                {id:1,name:'Evento',direction:'Cra. 87#30-65 Medellin, Antioquia',description:'Este evento es una oportunidad muy importante, en el que podras mostrar todo tu potencial.'},
                {id:2,name:'Hackaton',direction:'Virtual',description:'Este evento es una oportunidad muy importante, en el que podras mostrar todo tu potencial.'},
                {id:3,name:'Hackaton',direction:'Virtual',description:'Este evento es una oportunidad muy importante, en el que podras mostrar todo tu potencial.'},
            ],
            [
                
            ]
        ]
    }
    const handleClick = (e)=>{
        history.push('');
    }
    return (
        <div className='events'>
            <p>Recientes</p>
            {
                events.type[type].map(event=>{
                    return (
                        <div onClick={handleClick}>
                            <Event event={event} key={event.id} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Events;