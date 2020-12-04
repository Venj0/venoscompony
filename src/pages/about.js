import React  from "react"
import {StAboutUs} from "../styles/styles"
import {BaseUrl} from "../url";

let parse = require('html-react-parser');




export const About = ({global,toggleViewAll  } )=>
        <StAboutUs  w={global.sizes.w} h={global.sizes.h -150}
            src={ BaseUrl+global.pages[1].img}>
            <div className="img">
                <div className="image"  />
                <div className="border"/>
            </div>
            <div className="text">
                <div className="header">{global.pages[1].header[global.activeLanguage]}</div>
                <p>{parse(global.pages[1].text[global.activeLanguage])}</p>
                <button onClick={e => toggleViewAll({open: true, page:1})} > {global.pages[1].readMoreText[global.activeLanguage]}<i className="fas fa-chevron-right"/></button>
            </div>

        </StAboutUs>
