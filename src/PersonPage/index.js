import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../Common/Container';
import Header from '../Common/Header';
import GridTemplate from '../Common/GridTemplate';
import { moviesKey, personKey } from '../keys';
import UniversalBigTile from '../UniversalBigTile';
import { useDispatch, useSelector } from 'react-redux';
import { initiateMovieOrPersonFetch, selectPersonCredits, selectPersonDetails } from '../MoviesSlice';

function MoviePage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(initiateMovieOrPersonFetch({
          id: id,
          type: personKey,
        }))
      }, [])

    const personDetails = useSelector(selectPersonDetails);
    const personCredits = useSelector(selectPersonCredits);
    return (
        <div>
            <UniversalBigTile
                content={personDetails}
                type={personKey}
            />
            <Container>{personDetails.name}</Container>
            <Container>
                <Header text={`Movies - cast(${personCredits.cast && personCredits.cast.length})`} />
                <GridTemplate
                    content={personCredits.cast}
                    type={moviesKey}
                />
            </Container>
            <Container>
                <Header text={`Movies - Crew(${personCredits.crew && personCredits.crew.length})`} />
                <GridTemplate
                    content={personCredits.crew}
                    type={moviesKey}
                />
            </Container>
        </div>
    );
};

export default MoviePage;