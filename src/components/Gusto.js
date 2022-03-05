import React, { useState } from 'react';
import '../styles/gustos.css';
const initialSelection = {
    select:'',
    selection:0
}
const Gusto = ({gusto,gustos,setGustos})=> {
    const [select,setSelect] = useState(initialSelection);
    const handleClick = (ev)=>{
        if(!select.selection){
            setSelect({select:'select-gusto',selection:1});
            setGustos([...gustos,gusto]);
        }else{
            setSelect({select:'',selection:0});
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