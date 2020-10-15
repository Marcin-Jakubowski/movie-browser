import React from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from "../Movies/useAPItest";
import Container from '../Common/Container';


function MoviePage() {

    const {id} = useParams();
    const movieDetails = useAPI(`https://api.themoviedb.org/3/movie/${id}?`);
    console.log(movieDetails);

    return (
        <Container>
            test
        </Container>
    );
};

export default MoviePage;