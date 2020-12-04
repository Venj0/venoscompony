import React, {useContext, useEffect, useState} from "react"
import {GlobalContext} from "../context/global/globalContext";
import {StCv, StCvNav, StViewAllCloseButton} from "../styles/styles";

export const Cv = ( )=>{
    let {global, toggleCV} = useContext(GlobalContext)

    let [state,setState] = useState(global.cv)

    useEffect(()=>{
        setState(global.cv)
    },[global])
    // console.log(state)
    let close = () =>{
        setState({...state,open:false})
        setTimeout(()=>{
            toggleCV({open: false, tag: -1})
        },500)
    }
    return (
        <>
            <StCvNav open={state.open && !global.isOpenHeader } h={global.sizes.h} w={global.sizes.w}
                     bgc={false}>

            </StCvNav>
        <StCv open={state.open && !global.isOpenHeader } h={global.sizes.h} w={global.sizes.w}
              bgc={false}>
            <StViewAllCloseButton open={state.open && !global.isOpenHeader} h={global.sizes.h} w={global.sizes.w}
                                  onClick={() =>  close()} pos={"r"}
                                  bgc={state.page>-1 &&  global.pages[state.page].bgcType }
            >
                <i className="fal fa-times"/>
            </StViewAllCloseButton>
            <h1>cv</h1>
            {
                state.tag
            }
        </StCv>
       </>
    )
}