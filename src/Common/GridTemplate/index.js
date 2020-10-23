import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesKey } from "../../keys";
import MovieSmallTile from "../../MovieSmallTile";
import { Wrapper, GridTemplateLink } from "./styled";
import {  selectGenres, setGenres } from "../../MoviesSlice";

const GridTemplate = ({ content, type }) => {
  const dispatch = useDispatch();
  const genresData = useSelector(selectGenres);

  if (genresData === []) {
    dispatch(setGenres([]))
  } else {};

  return (
    <Wrapper
      type={type}
    >
      {content && content.map((fragment) => (
        <div>
          {type === moviesKey
          ? <GridTemplateLink to={`/movies/${fragment.id}`}>{<MovieSmallTile content={fragment} />}</GridTemplateLink>
          : <GridTemplateLink to={`/people/${fragment.id}`}>{fragment.name}</GridTemplateLink>}
        </div>)
      )}
    </Wrapper>
  )
}

export default GridTemplate;