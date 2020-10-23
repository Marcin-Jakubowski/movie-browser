import React from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from "../useFetchAPI";
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
import imageBaseLink from "../imageBaseLink";
import voteIcon from "./voteIcon.svg";
import Container from '../Common/Container';
import Header from '../Common/Header';
import GridTemplate from '../Common/GridTemplate';
import { peopleKey } from '../keys';

function MoviePage() {
    const { id } = useParams();
    const movieDetails = useAPI("movieDetails", `https://api.themoviedb.org/3/movie/${id}?`);
    const movieCredits = useAPI("movieCredits", `https://api.themoviedb.org/3/movie/${id}/credits?`);
    const posterImageBaseLink = imageBaseLink("w1280");
    
    return (
        <div>
            <PosterBackgrundContainer>
                <PosterShadowContainer link={'"' + posterImageBaseLink + movieDetails.backdrop_path + '"'}>
                    <PosterBackgroundImageContainer>
                        <PosterItemsContainer>
                            <LongTitle>
                                {movieDetails.title}
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
            <Container>
                <Header text={"Cast"} />
                <GridTemplate
                    content={movieCredits.cast}
                    type={peopleKey}
                />
            </Container>
            <Container>
                <Header text={"Crew"} />
                <GridTemplate
                    content={movieCredits.crew}
                    type={peopleKey}
                />
            </Container>
        </div>
    );
};

export default MoviePage;