import React from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from "../Movies/useAPItest";
import Container from '../Common/Container';
import Header from '../Common/Header';
import GridTemplate from '../Common/GridTemplate';

function MoviePage() {
    const { id } = useParams();
    const personDetails = useAPI("personDetails", `https://api.themoviedb.org/3/person/${id}?`);
    const personCredits = useAPI("personCredits", `https://api.themoviedb.org/3/person/${id}/tv_credits?`);
console.log(personCredits)
    return (
        <div>
            <Container>{personDetails.name}</Container>
            <Container>
                <Header text={`Movies - cast(${personCredits.cast && personCredits.cast.length})`} />
                <GridTemplate
                    content={personCredits.cast}
                    type={"movies"}
                />
            </Container>
            <Container>
                <Header text={`Movies - Crew(${personCredits.crew && personCredits.crew.length})`} />
                <GridTemplate
                    content={personCredits.crew}
                    type={"movies"}
                />
            </Container>
        </div>
    );
};

export default MoviePage;