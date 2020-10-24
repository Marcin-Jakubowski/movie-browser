import React from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from "../useFetchAPI";
import Container from '../Common/Container';
import Header from '../Common/Header';
import GridTemplate from '../Common/GridTemplate';
import { moviesKey, personKey } from '../keys';
import UniversalBigTile from '../UniversalBigTile';

function MoviePage() {
    const { id } = useParams();
    const personDetails = useAPI("personDetails", `https://api.themoviedb.org/3/person/${id}?`);
    const personCredits = useAPI("personCredits", `https://api.themoviedb.org/3/person/${id}/movie_credits?`);
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