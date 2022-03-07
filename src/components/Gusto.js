import React, { useEffect, useState } from 'react';
import '../styles/gustos.css';
const initialSelection = {
    select:'',
    selection:0
}
const active = {select:'select-gusto',selection:1};
const Gusto = ({gusto,gustos,setGustos})=> {
    const [select,setSelect] = useState(initialSelection);
    useEffect(()=>{
        if(gustos.find(g=>g.id === gusto.id)){
            setSelect(active)
            console.log(gusto.id)
        }
            
        },[gustos,gusto.id]);
    const handleClick = (ev)=>{
        if(!select.selection){
            setSelect(active);
            setGustos([...gustos,gusto]);
        }else{
            setSelect(initialSelection);
            setGustos(gustos.filter(e=>e.id !== gusto.id));
        }
    }
    return (
        <button className={'gusto  '+select.select} onClick={handleClick}>
            {gusto.name}
        </button>
  )
}
export default Gusto;