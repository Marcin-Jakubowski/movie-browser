import React from "react";
import PersonTile from "../PersonTile"
import { Link } from "react-router-dom";
import { moviesKey } from "../../keys";
import { Wrapper, StyledLink } from "./styled";


const GridTemplate = ({ content, type, castAndCrew }) => {

  return (
    <Wrapper
      type={type}
    >
      {content && content.map((fragment) => (
        <div
          key={castAndCrew ? fragment.credit_id : fragment.id}
        >
          {type === moviesKey
            ? <Link to={`/movies/${fragment.id}`}>{fragment.title || fragment.name}</Link>
            :
            <StyledLink
              to={`/people/${fragment.id}`}
            >
              <PersonTile
                person={fragment}
                castAndCrew={castAndCrew}
              />
            </StyledLink>
          }
        </div>

      ))
      }
    </Wrapper >
  )
}
export default GridTemplate



