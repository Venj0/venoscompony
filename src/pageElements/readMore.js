import React, {useContext, useState} from "react"
import { StViewAll, StViewAllCloseButton} from "../styles/styles";
import {GlobalContext} from "../context/global/globalContext";
import {SliderItem} from "./sliderItem";

export const ReadMore = () => {
    let {global, toggleViewAll} = useContext(GlobalContext)

    return (
        <>
            <StViewAllCloseButton open={global.viewAll.open} h={global.sizes.h} w={global.sizes.w} onClick={() => {
                toggleViewAll({open: false, page: -1})
            }}
                                  type={global.pages[global.viewAll.page]?global.pages[global.viewAll.page].bgcType :null}
            >
                <i className="fal fa-times"/>
            </StViewAllCloseButton>


            <StViewAll open={global.viewAll.open} h={global.sizes.h} w={global.sizes.w}
                       type={global.pages[global.viewAll.page]?global.pages[global.viewAll.page].bgcType :null}>
                {global.viewAll.page>0?
                    global.pages[global.viewAll.page].items.map(item=>
                        <SliderItem w={global.sizes.w} key={item.id} item={item} type={global.pages[global.viewAll.page].bgcType?"user":""}/>
                    ):null
                }

            </StViewAll>

        </>
    )
}