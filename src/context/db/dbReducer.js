// import React from "react";
const handlers={
    // [READ_HEADER]:state =>({}),
    DEFAULT:state=>state
}

export const dbReducer = (state, action)=>{
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}