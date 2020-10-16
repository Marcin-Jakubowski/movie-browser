import React from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from "../Movies/useAPItest";
import {
    PosterBackgrundContainer,
    PosterShadowContainer,
    PosterBackgroundImageContainer,
    PosterItemsContainer,
    LongTitle,
    VotesAverageContainer,
    VotesAverageBox,
    VoteIcon,
    VotesSmallContent,
    VotesBigContent,

} from './styled';
import imageBaseLink from "./imageBaseLink";
import voteIcon from "./voteIcon.svg";

function MoviePage() {
    const { id } = useParams();
    const movieDetails = useAPI(`https://api.themoviedb.org/3/movie/${id}?`);
    const PosterImageBaseLink = imageBaseLink("w1280");
    console.log("x");

    return (
        <PosterBackgrundContainer>
            <PosterShadowContainer link={'"' + PosterImageBaseLink + movieDetails.backdrop_path + '"'}>
                <PosterBackgroundImageContainer>
                    <PosterItemsContainer>
                        <LongTitle>
                            {movieDetails.original_title}
                        </LongTitle>
                        <VotesAverageContainer>
                            <VoteIcon src={voteIcon} alt="Vote icon" />
                            <VotesAverageBox>
                                <VotesBigContent>{movieDetails.vote_average}</VotesBigContent>
                                <VotesSmallContent> / 10</VotesSmallContent>
                            </VotesAverageBox>
                        </VotesAverageContainer>
                        <p>
                            <VotesSmallContent>
                                {movieDetails.vote_count} votes
                        </VotesSmallContent>
                        </p>

                    </PosterItemsContainer>
                </PosterBackgroundImageContainer>
            </PosterShadowContainer>
        </PosterBackgrundContainer>
    );
};

export default MoviePage;