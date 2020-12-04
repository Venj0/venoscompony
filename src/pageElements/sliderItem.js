import React from "react"
import {StSliderItem} from "../styles/styles";
import {BaseUrl} from "../url";


export const SliderItem = ({item, type,w,name})=> <StSliderItem onClick={e => e.preventDefault()} className={"item"}
                       src={BaseUrl+item.img} type={type}

                      w={w}
        > <a href={item.url || item.tag} className={"item"}>

            {
                type === "user"
                    ? <>
                        <div className={"img"}/>
                        <h2>{name}</h2>
                    </>
                    : <>
                        <h3>{name}</h3>
                        <div className={"img"}/>
                    </>

            }
        </a>

        </StSliderItem>
