import React from "react";
import { Link } from "react-router-dom";
import { moviesKey } from "../../apiKey";
import { Wrapper } from "./styled";


const GridTemplate = ({ content, type }) => {
  return (
    <Wrapper
      type={type}
    >
      {content && content.map((fragment) => (
        <div>
          {type === moviesKey
          ? <Link to={`/movies/${fragment.id}`}>{fragment.title || fragment.name}</Link>
          : <Link to={`/people/${fragment.id}`}>{fragment.name}</Link>}
        </div>)
      )}
    </Wrapper>
  )
}
export default GridTemplate



