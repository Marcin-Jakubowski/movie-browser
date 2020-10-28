import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { moviesKey } from "../../keys";
import MovieSmallTile from "../../MovieSmallTile";
import PersonTile from "../PersonTile"
import { Wrapper, GridTemplateLink } from "./styled";
import { selectGenres, setGenres } from "../../MoviesSlice";

const GridTemplate = ({ content, type, castAndCrew }) => {
  const dispatch = useDispatch();
  const genresData = useSelector(selectGenres);

  if (genresData === []) {
    dispatch(setGenres([]))
  } else { };

  return (
    <Wrapper
      type={type}
    >
      {content && content.map((fragment) => (
        <li
          key={fragment.credit_id ? fragment.credit_id : fragment.id}
        >
          {
            type === moviesKey
              ? <GridTemplateLink
                to={`/movies/${fragment.id}`}
              >
                {<MovieSmallTile
                  key={fragment.id}
                  content={fragment}
                />}
              </GridTemplateLink>
              : <GridTemplateLink

                to={`/people/${fragment.id}`}>
                <PersonTile
                  person={fragment}
                  castAndCrew={castAndCrew}
                />
              </GridTemplateLink>
          }
        </li>
      )
      )}
    </Wrapper>

  )
}

export default GridTemplate;