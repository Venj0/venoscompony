import React, {useContext} from "react"
import {  StLoading} from "../styles/styles"
import {GlobalContext} from "../context/global/globalContext";
import {Start} from "../pages/start";



export const Loading = () => {
    let {global } = useContext(GlobalContext)


    return (
        <StLoading active={global.loading}  w={global.sizes.w} h={global.sizes.h  }    >
           <Start w={global.sizes.w} h={global.sizes.h  }  l={global.sizes.w>1024?100:50}/>
        </StLoading>
    )
}