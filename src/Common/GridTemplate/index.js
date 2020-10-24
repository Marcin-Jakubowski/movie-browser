import React from "react";
import PersonTile from "../PersonTile"
import { Link } from "react-router-dom";
import { moviesKey } from "../../keys";
import { Wrapper } from "./styled";
import { nanoid } from "@reduxjs/toolkit";


const GridTemplate = ({ content, type, castAndCrew }) => {
  return (
    <Wrapper
      type={type}
    >
      {content && content.map((fragment) => (
        <div
          key={nanoid()}
        >
          {type === moviesKey
            ? <Link to={`/movies/${fragment.id}`}>{fragment.title || fragment.name}</Link>
            : <PersonTile
              person={fragment}
              castAndCrew={castAndCrew}
            />
          }
        </div>
      ))}
    </Wrapper>
  )
}
export default GridTemplate



