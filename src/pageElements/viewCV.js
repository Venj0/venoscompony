import React, {useContext, useEffect, useState} from "react"
import {GlobalContext} from "../context/global/globalContext";
import {StCv, StCvNav, StViewAllCloseButton} from "../styles/styles";

export const Cv = () => {
    let {global, toggleCV} = useContext(GlobalContext)

    let [state, setState] = useState(global.cv)

    useEffect(() => {
        setState(global.cv)
    }, [global])

    // console.log(state)

    let close = () => {
        setState({...state, open: false})
        setTimeout(() => {
            toggleCV({open: false, tag: -1})
        }, 500)
    }

    return (
        <>
            <StViewAllCloseButton open={state.open && !global.isOpenHeader} h={global.sizes.h} w={global.sizes.w}
                                  onClick={() => close()}
                                  bgc={1}
            >
                <i className="fal fa-times"/>
            </StViewAllCloseButton>
            <StCv open={state.open && !global.isOpenHeader} h={global.sizes.h} w={global.sizes.w}
                  bgc={false}>
                <div>
                    {
                        state.data.map(item => <div key={item.id}>
                            <h1>{item.name[global.activeLanguage]}</h1>
                            <p>{item.text[global.activeLanguage]}</p>
                        </div>)
                    }
                </div>
            </StCv>
        </>
    )
}