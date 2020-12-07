import React, {useContext, useEffect, useState} from "react"
import {StReadMore, StViewAll, StViewAllCloseButton} from "../styles/styles";
import {GlobalContext} from "../context/global/globalContext";
import {SliderItem} from "./sliderItem";
let parse = require('html-react-parser');

export const ViewAll = () => {
    let {global, toggleViewAll} = useContext(GlobalContext)

    let [state,setState] = useState(global.viewAll)

    useEffect(()=>{
        setState(global.viewAll)
    },[global])

     let close = () =>{
        setState({...state,open:false})
         setTimeout(()=>{
             toggleViewAll({open: false, page: -1})
         },500)
     }

    return (
        <>
            <StViewAllCloseButton open={state.open && !global.isOpenHeader} h={global.sizes.h} w={global.sizes.w}
                                  onClick={() =>  close()}
                                  bgc={state.page>-1 &&  global.pages[state.page].bgcType }
            >
                <i className="fal fa-times"/>
            </StViewAllCloseButton>


            <StViewAll open={state.open && !global.isOpenHeader } h={global.sizes.h} w={global.sizes.w}
                       bgc={global.pages[state.page] ? global.pages[state.page].bgcType : null}>
                {state.page === 1 ?
                   <StReadMore w={global.sizes.w} h={global.sizes.h} >
                       <div className="header">
                           <h1>{global.pages[1].header[global.activeLanguage]}</h1>
                       </div>
                       <div className="content">
                           <div>
                           {parse(global.pages[1].text[global.activeLanguage])}
                           </div>
                       </div>
                   </StReadMore> : null
                }
                {[2, 3].indexOf(state.page) !== -1 ?
                    global.pages[state.page].items.map(item =>
                        <SliderItem name={item.url || item.name[global.activeLanguage]} w={global.sizes.w} key={item.id} item={item}
                                    type={global.pages[state.page].bgcType ? "user" : ""}/>
                    ) : null
                }

            </StViewAll>

        </>
    )
}