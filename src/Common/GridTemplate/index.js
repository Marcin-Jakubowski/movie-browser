import React from "react"
import { Wrapper } from "./styled"

const GridTemplate = ({ content }) => (
    <Wrapper>
        {content.map((fragment) => (
            <div>
                {fragment.name}
            </div>
        ))}
    </Wrapper>
)

export default GridTemplate



/*{content.map((fragment) => {
    <Tile>
        {fragment.name}
    </Tile>
      })}*/
