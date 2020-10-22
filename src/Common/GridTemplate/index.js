import React from "react";
import { moviesKey } from "../../keys";
import MovieSmallTile from "../../MovieSmallTile";
import { Wrapper, GridTemplateLink } from "./styled";


const GridTemplate = ({ content, type }) => {
  return (
    <Wrapper
      type={type}
    >
      {content && content.map((fragment) => (
        <div>
          {type === moviesKey
          ? <GridTemplateLink to={`/movies/${fragment.id}`}>{<MovieSmallTile fragment={fragment} />}</GridTemplateLink>
          : <GridTemplateLink to={`/people/${fragment.id}`}>{fragment.name}</GridTemplateLink>}
        </div>)
      )}
    </Wrapper>
  )
}
export default GridTemplate



