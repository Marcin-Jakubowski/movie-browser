import React from "react"
import { Wrapper } from "./styled"

const GridTemplate = ({ content }) =>{
    return (
    <Wrapper>
      {content.map((fragment) => (
    <div>
        {fragment.title}
    </div>)
      )}
    </Wrapper>
)}
export default GridTemplate



