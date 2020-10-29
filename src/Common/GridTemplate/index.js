import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "./styled";
import { selectGenres, setGenres } from "../../MoviesSlice";
import GridListItem from "../GridListItem";

const GridTemplate = ({ content, type, castAndCrew }) => {
  const dispatch = useDispatch();
  const genresData = useSelector(selectGenres);

  const [showMore, setShowMore] = useState(false)

  if (genresData === []) {
    dispatch(setGenres([]))
  } else { };

  const toHide = (i) => i > 11 && castAndCrew
  return (
    <>
      <Grid
        type={type}
      >
        {content && content.map((fragment) => (
          <GridListItem
            key={fragment.credit_id ? fragment.credit_id : fragment.id}
            fragment={fragment}
            toHide={toHide(content.indexOf(fragment))}
            castAndCrew={castAndCrew}
            type={type}
            showMore={showMore}
          />
        )
        )}
      </Grid>
      {content.length > 12 && castAndCrew && !showMore ?
        <Button
          onClick={() => setShowMore(true)}
        >
          show more
      </Button> :
        ""
      }
    </>
  )
}

export default GridTemplate;