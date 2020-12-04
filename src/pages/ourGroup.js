import React  from "react"
import {  StOurGroup} from "../styles/styles";
import {Slider} from "../pageElements/Slider";




export const OurGroup = ({global}) =>
    <StOurGroup w={global.sizes.w} h={global.sizes.h - 150}>
            <Slider   page={2}  />
    </StOurGroup>
