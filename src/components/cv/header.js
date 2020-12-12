import React from "react"
import {StCvHeader} from "../../styles/styles";

export const CvHeader = ({data,lang,w}) => <StCvHeader w={w} className={"header"}>
            {
                data.map(item=><div key={item.id}>
                    <a href={`#_${item.name[2].replace(/\s/,"_")}`} >{item.name[lang]}</a>
                    <hr/>
                </div>)
            }
        </StCvHeader>
