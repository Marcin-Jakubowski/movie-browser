import React from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from "../Movies/useAPItest";
import {
    PosterBackgroundContainer,
    PosterBackgroundImageContainer,
    PosterItemsContainer,
    ItemsContainer,
    LongTitle
} from './styled';
import imageBaseLink from "./imageBaseLink"

function MoviePage() {
    const { id } = useParams();
    const movieDetails = useAPI(`https://api.themoviedb.org/3/movie/${id}?`);
    const PosterImageBaseLink = imageBaseLink("w1280");
    console.log("x");

    return (
        <PosterBackgroundContainer link={'"' + PosterImageBaseLink + movieDetails.backdrop_path + '"'}>
            <PosterBackgroundImageContainer>
                <PosterItemsContainer>
                    <ItemsContainer>
                        <LongTitle>
                            {movieDetails.original_title}
                        </LongTitle>

                    </ItemsContainer>
                    test
                </PosterItemsContainer>
            </PosterBackgroundImageContainer>
        </PosterBackgroundContainer>
    );
};

export default MoviePage;