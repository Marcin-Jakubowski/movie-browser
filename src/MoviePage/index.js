import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    PosterBackgrundContainer,
    PosterShadowContainer,
    PosterBackgroundImageContainer,
    PosterItemsContainer,
    Title,
    VotesContainer,
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
import { movieKey, peopleKey } from '../keys';
import UniversalBigTile from '../UniversalBigTile';
import { useDispatch, useSelector } from 'react-redux';
import { initiateMovieOrPersonFetch, selectAdult, selectMovieCredits, selectMovieDetails, selectStatus } from '../MoviesSlice';
import LoadingPage from '../Common/LoadingPage';
import Failed from '../Common/Failed';
import AdultContent from '../Common/AdultContent';

function MoviePage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const posterImageBaseLink = imageBaseLink("w1280");

    const status = useSelector(selectStatus)
    const adult = useSelector(selectAdult)

    useEffect(() => {
        dispatch(initiateMovieOrPersonFetch({
            id: id,
            type: movieKey,
        }))
    }, [id, dispatch])

    const movieDetails = useSelector(selectMovieDetails);
    const movieCredits = useSelector(selectMovieCredits);


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
            {status === "success" && movieDetails.adult && !adult ?
                <AdultContent /> :
                ""
            }
            {status === "success" && (!movieDetails.adult || (movieDetails.adult && adult)) ?
                <div>
                    {movieDetails.backdrop_path !== null
                        ? <PosterBackgrundContainer>
                            <PosterShadowContainer link={'"' + posterImageBaseLink + movieDetails.backdrop_path + '"'}>
                                <PosterBackgroundImageContainer>
                                    <PosterItemsContainer>
                                        <Title>
                                            {movieDetails.title}
                                        </Title>
                                        <VotesContainer>
                                            <VoteIcon src={voteIcon} alt="Vote icon" />
                                            <VotesAverageBox>
                                                <VotesBigContent>{movieDetails.vote_average}</VotesBigContent>
                                                <VotesSmallContent> / 10</VotesSmallContent>
                                            </VotesAverageBox>
                                        </VotesContainer>
                                        <VotesSmallContent>
                                            {movieDetails.vote_count} votes
                            </VotesSmallContent>
                                    </PosterItemsContainer>
                                </PosterBackgroundImageContainer>
                            </PosterShadowContainer>
                        </PosterBackgrundContainer>
                        : ""}
                    <Container>
                        <UniversalBigTile
                            content={movieDetails}
                            type="movie"
                        />
                    </Container>
                    <Container>
                        <Header text={"Cast"} />
                        <GridTemplate
                            content={movieCredits.cast}
                            type={peopleKey}
                            castAndCrew="cast"
                        />
                    </Container>
                    <Container>
                        <Header text={"Crew"} />
                        <GridTemplate
                            content={movieCredits.crew}
                            type={peopleKey}
                            castAndCrew="crew"
                        />
                    </Container>
                </div> :
                ""
            }
        </div>
    );
};

export default MoviePage;