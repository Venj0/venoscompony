import React, {useContext} from "react"
import {  StPage, StContentHeader} from "../styles/styles";
import {GlobalContext} from "../context/global/globalContext";




export const Container = ({children,pageId})=>{
    let {global,movePage,status } = useContext(GlobalContext)

    return(
        <StPage w={global.sizes.w} h={global.sizes.h } z={pageId} status={status(pageId)} bgc={global.pages[pageId].bgcType}>
            <StContentHeader active={pageId===global.activePage} w={global.sizes.w} h={global.sizes.h} bgc={global.isOpenHeader || global.pages[global.activePage].bgcType}>
                <div className="content">
                    {global.pages[pageId].name[global.activeLanguage]}
                </div>

                <button onClick={()=> movePage((pageId-global.activePage)?1:-1)} >
                    {status(pageId) === 1
                        ? <i className="fas fa-chevron-up"/>
                        :<i className="fas fa-chevron-down"/>
                    }
                </button>
            </StContentHeader>
            {children}


        </StPage>
    )
}