import { createContext, useReducer } from "react";
import eventReducer, { initialEventReducer } from "../reducers/EventReducer";
export const eventContext = createContext();

const EventProvider = ({children})=>{
    const [event,dispatchEvent] = useReducer(eventReducer,initialEventReducer);
    return (
        <eventContext.Provider value={{event,dispatchEvent}}>
            {children}
        </eventContext.Provider>
    )
}
export default EventProvider;