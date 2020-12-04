import React, {useContext, useRef} from "react"
import {  StContent} from "../styles/styles";
import {GlobalContext} from "../context/global/globalContext";
import {Start} from "../pages/start";
import {About} from "../pages/about";
import {OurGroup} from "../pages/ourGroup";
import {Portfolio} from "../pages/portfolio";
import {ContactUs} from "../pages/contactUs";
import {Container} from "./container";







export const Content = () => {
    let {global,sendEmail,toggleViewAll } = useContext(GlobalContext)

    let content = useRef()


    let components={
        start:<Start/>,
        about:<About global={global} toggleViewAll={toggleViewAll}/>,
        ourGroup:<OurGroup global={global} />,
        portfolio:<Portfolio global={global} />,
        contacts:<ContactUs global={global} send={sendEmail} />

    }


    return (
        <>

            <StContent  ref={content} w={global.sizes.w} h={global.sizes.h}>

                {global.pages.map((page,i) =>
                    (([2,3].indexOf(page.id) !==-1 && page.items.length) || [0,1,4].indexOf(page.id) !== -1) ?
                    <Container key={page.id} pageId={i}>{components[page.component]} </Container>
                        :null
                ) }

            </StContent>
        </>
    )
}
