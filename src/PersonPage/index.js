import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../Common/Container';
import Header from '../Common/Header';
import GridTemplate from '../Common/GridTemplate';
import { moviesKey, personKey } from '../keys';
import UniversalBigTile from '../UniversalBigTile';
import { useDispatch, useSelector } from 'react-redux';
import { initiateMovieOrPersonFetch, selectPersonCredits, selectPersonDetails, selectStatus } from '../MoviesSlice';
import LoadingPage from '../Common/LoadingPage';
import Failed from '../Common/Failed';

function MoviePage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(initiateMovieOrPersonFetch({
            id: id,
            type: personKey,
        }))
    }, [id, personKey, dispatch])

    const personDetails = useSelector(selectPersonDetails);
    const personCredits = useSelector(selectPersonCredits);

    const status = useSelector(selectStatus);

    return (
        <div>
            {status === "failed" ?
                <Failed />
                :
                ""
            }
            {status === "loading" ?
                <LoadingPage /> :
                ""
            }
            {status === "success" ?
                <div>
                    <Container>
                        <UniversalBigTile
                            content={personDetails}
                            type={personKey}
                        />
                    </Container>
                    <Container>
                        <Header text={`Movies - cast(${personCredits.cast && personCredits.cast.length})`} />
                        <GridTemplate
                            content={personCredits.cast}
                            type={moviesKey}
                            castAndCrew="movies"
                        />
                    </Container>
                    <Container>
                        <Header text={`Movies - Crew(${personCredits.crew && personCredits.crew.length})`} />
                        <GridTemplate
                            content={personCredits.crew}
                            type={moviesKey}
                            castAndCrew="movies"
                        />
                    </Container>
                </div> :
                ""
            }
        </div>
    );
};

export default MoviePage;