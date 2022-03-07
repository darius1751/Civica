import EventTYPES from "../action/EventReducerTYPES";
export const initialEventReducer = {
    id:null,
    name:null,
    direction:null,
    description:null
}
const eventReducer = (state,action)=>{
    const {type,payload = initialEventReducer} = action;
    switch(type){
        case EventTYPES.SAVE:
            console.log(payload);
            return payload;
        case EventTYPES.RESET:
            return initialEventReducer;
        default:
            return state;
    }
}
export default eventReducer;