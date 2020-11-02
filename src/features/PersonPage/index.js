import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    initiateMovieOrPersonFetch,
    selectAdult,
    selectPersonCredits,
    selectPersonDetails,
    selectStatus,
} from '../../MoviesSlice';
import { moviesKey, personKey } from '../../functionsAndKeys/keys';
import Container from '../../Common/Container';
import Header from '../../Common/Header';
import GridTemplate from '../../Common/GridTemplate';
import UniversalBigTile from '../../tiles/UniversalBigTile';
import LoadingPage from '../../Common/LoadingPage';
import Failed from '../../Common/Failed';
import AdultContent from '../../Common/AdultContent';
import ToggleThemeButton from '../../Common/ToggleThemeButton';

function MoviePage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(initiateMovieOrPersonFetch({
            id: id,
            type: personKey,
        }))
    }, [id, dispatch]);

    const personDetails = useSelector(selectPersonDetails);
    const personCredits = useSelector(selectPersonCredits);

    const status = useSelector(selectStatus);
    const adult = useSelector(selectAdult);

    return (
        <>
            {status === "failed"
                ? <Failed />
                : ""
            }
            {status === "loading"
                ? <LoadingPage />
                : ""
            }
            {status === "success" && personDetails.adult && !adult
                ? <AdultContent />
                : ""
            }
            {status === "success" && (!personDetails.adult || (personDetails.adult && adult))
                ? <div>
                    <Container>
                        <UniversalBigTile
                            content={personDetails}
                            type={personKey}
                        />
                    </Container>
                    <Container>
                        <Header
                            text={`Movies - cast(${personCredits.cast && personCredits.cast.length})`}
                        />
                        <GridTemplate
                            content={personCredits.cast}
                            type={moviesKey}
                            castAndCrew="movies"
                        />
                    </Container>
                    <Container>
                        <Header
                            text={`Movies - Crew(${personCredits.crew && personCredits.crew.length})`}
                        />
                        <GridTemplate
                            content={personCredits.crew}
                            type={moviesKey}
                            castAndCrew="movies"
                        />
                    </Container>
                </div>
                : ""
            }
            {status === "loading"
            ? ""
            : <ToggleThemeButton />
            }
        </>
    );
};

export default MoviePage;