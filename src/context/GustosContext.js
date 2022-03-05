import {createContext } from "react";

export const gustosContext = createContext();

const GustosProvider = ({children})=>{
    return (
        <gustosContext.Provider>
            {children}
        </gustosContext.Provider>
    )
}
export default GustosProvider;
