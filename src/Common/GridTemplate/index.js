import React from "react"
import { Wrapper } from "./styled"

const GridTemplate = ({ content, type }) => {
  return (
    <Wrapper
      type={type}
    >
      {content.map((fragment) => (
        <div>
          {type === "movies" ? fragment.title : fragment.name}
        </div>)
      )}
    </Wrapper>
  )
}
export default GridTemplate



