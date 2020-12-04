import React, {useContext} from "react"
import { StStartPage} from "../styles/styles"
import {GlobalContext} from "../context/global/globalContext";

let logo = require("./../img/darkv.png")

export const Start = ({l=0}) => {
    let {global } = useContext(GlobalContext)
    return (
        <StStartPage l={l} w={global.sizes.w} h={global.sizes.h - 50} src={logo} active={0===global.activePage}>
            <div className="h1">welcome
                <div className="h2">to</div>
            </div>
            <div className="logo" />
        </StStartPage>
    )
}