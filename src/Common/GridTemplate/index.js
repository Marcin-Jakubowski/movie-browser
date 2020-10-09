import React from "react"
import { Wrapper } from "./styled"

const GridTemplate = ({ content, type }) =>{
    return (
    <Wrapper
      type={type}
    >
      {content.map((fragment) => (
    <div>
        {fragment.title}
    </div>)
      )}
    </Wrapper>
)}
export default GridTemplate



