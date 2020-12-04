import React, {useContext} from "react"
import {GlobalContext} from "../context/global/globalContext";
import {
    StFlag,
    StHeader,
    StHeaderCTRL,
    StHeaderFlags, StHeaderMenu
} from "../styles/styles";

import {NavLink} from "react-router-dom";
import {ContactUs} from "../pages/contactUs";

let logoLite = require('./../img/lite.png')
let logoDark = require('./../img/dark.png')

export const MainMenu = () => {
    let {global,sendEmail, changeLanguage,movePage, toggleIsOpenHeader} = useContext(GlobalContext)


    let changeUrl = id => {
        console.log(id, parseInt(id) - global.activePage)
        movePage(parseInt(id) - global.activePage)
        setTimeout(()=>{
            toggleIsOpenHeader()
        },500)

    }


    return (
        <>
            {global.pages!== undefined && global.pages.length  ?


                <StHeader w={global.sizes.w} h={global.sizes.h} open={global.isOpenHeader}>

                    <StHeaderMenu w={global.sizes.w} h={global.sizes.h} morc={global.morc}>
                        <div className="menu">
                            <div className="line">{global.languages.map(lang => (lang.active && lang.id !== global.activeLanguage) &&
                                <StFlag className={"flag"} style={{backgroundImage: `url(${lang.img})`}} key={lang.id}
                                        onClick={() => changeLanguage(lang.id)} data_value={lang.id}/>)}
                            </div>
                            {global.pages.map(page => page.id !== 4?
                                <div  key={page.id} className="line"><NavLink onClick={() => changeUrl(page.id)}
                                                               to={page.url}>{page.name[global.activeLanguage]}</NavLink></div>
                                :null
                            )}
                        </div>
                        <button className={"toggle"} onClick={() =>movePage(global.morc?1:-1,0)}>
                            {
                                global.morc ?
                                    <>
                                        {["contacts", "contacts", "contacts"][global.activeLanguage]}
                                        <i className="fas fa-chevron-down"/>
                                    </>
                                    : <>
                                        {["menu", "menu", "menu"][global.activeLanguage]}
                                        <i className="fas fa-chevron-up"/>
                                    </>

                            }
                        </button>
                        <div className="contactUs">

                            <ContactUs global={global} w={global.sizes.w / 2} h={global.sizes.h} send={sendEmail}/>
                        </div>
                    </StHeaderMenu>

                    <StHeaderCTRL w={global.sizes.w} h={global.sizes.h}
                                  bgc={global.isOpenHeader || global.pages[global.activePage].bgcType}>

                        <StHeaderFlags w={global.sizes.w}>
                            {/*{global.languages.map(lang => (lang.active && lang.id !== global.activeLanguage) &&*/}
                            {/*    <button className={"flag"} style={{backgroundImage: `url(${lang.img})`}} key={lang.id}*/}
                            {/*            onClick={() => changeLanguage(lang.id)} data_value={lang.id}/>)}*/}
                        </StHeaderFlags>
                        <button onClick={() => toggleIsOpenHeader()} className={!global.isOpenHeader ? "open" : "close"}>
                            {!global.isOpenHeader ?
                                <>
                                    <div className={"line line1"}>
                                        <p>menu </p>
                                        <hr/>
                                    </div>
                                    <div className={"line line2"}>

                                        <hr/>
                                    </div>
                                </> :
                                <>


                                    <hr className={"hr1"}/>


                                    <hr className={"hr2"}/>
                                </>
                            }
                        </button>

                        <StHeaderFlags w={global.sizes.w}
                                       src={global.activePage !== 0 ? ((global.isOpenHeader || global.pages[global.activePage].bgcType) ? logoDark : logoLite) : ``}/>
                    </StHeaderCTRL>
                </StHeader>
                : null
            }
        </>
    )
}