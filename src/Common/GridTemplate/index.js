import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styled";


const GridTemplate = ({ content, type }) => {
  return (
    <Wrapper
      type={type}
    >
      {content && content.map((fragment) => (
        <div>
          {type === "movies" ? <Link to={`/movies/${fragment.id}`}>{fragment.title}</Link> : fragment.name}
        </div>)
      )}
    </Wrapper>
  )
}
export default GridTemplate



