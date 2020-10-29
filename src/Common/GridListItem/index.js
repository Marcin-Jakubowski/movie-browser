import React from "react"
import { useDispatch } from "react-redux"
import { moviesKey } from "../../keys"
import MovieSmallTile from "../../MovieSmallTile"
import { setStatus } from "../../MoviesSlice"
import { GridLink } from "./styled"
import PersonTile from "../PersonTile"

const GridListItem = ({ fragment, type, castAndCrew, toHide, showMore }) => {

    const dispatch = useDispatch()

    return  ((toHide && showMore ) || !toHide) && (
        <li
            onClick={() => dispatch(setStatus("loading"))}
        >
            {
                type === moviesKey
                    ? <GridLink
                        to={`/movies/${fragment.id}`}
                    >
                        {<MovieSmallTile
                            key={fragment.id}
                            content={fragment}
                            castAndCrew={castAndCrew}
                        />}
                    </GridLink>
                    : <GridLink

                        to={`/people/${fragment.id}`}>
                        <PersonTile
                            person={fragment}
                            castAndCrew={castAndCrew}
                        />
                    </GridLink>
            }
        </li>
    )
}

export default GridListItem