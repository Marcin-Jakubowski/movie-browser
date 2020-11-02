import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    initiateMovieOrPersonFetch,
    selectAdult,
    selectMovieCredits,
    selectMovieDetails,
    selectStatus
} from '../../MoviesSlice';
import { movieKey, peopleKey } from '../../functionsAndKeys/keys';
import imageBaseLink from "../../functionsAndKeys/imageBaseLink";
import voteIcon from "../../assets/voteIcon.svg";
import Container from '../../Common/Container';
import Header from '../../Common/Header';
import GridTemplate from '../../Common/GridTemplate';
import UniversalBigTile from '../../tiles/UniversalBigTile';
import LoadingPage from '../../Common/LoadingPage';
import Failed from '../../Common/Failed';
import AdultContent from '../../Common/AdultContent';
import ToggleThemeButton from '../../Common/ToggleThemeButton';
import {
    PosterBackgrundContainer,
    PosterShadowContainer,
    PosterBackgroundImageContainer,
    PosterItemsContainer,
    Title,
    ContentContainer,
    VotesContainer,
    VotesAverageBox,
    VoteIcon,
    VotesSmallContent,
    VotesBigContent,
} from './styled';

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
    }, [id, dispatch]);

    const movieDetails = useSelector(selectMovieDetails);
    const movieCredits = useSelector(selectMovieCredits);

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
            {status === "success" && movieDetails.adult && !adult
                ? <AdultContent />
                : ""
            }
            {status === "success" && (!movieDetails.adult || (movieDetails.adult && adult))
                ? <div>
                    {movieDetails.backdrop_path !== null
                        ? <PosterBackgrundContainer>
                            <PosterBackgroundImageContainer
                                link={'"' + posterImageBaseLink + movieDetails.backdrop_path + '"'}
                            >
                                <PosterShadowContainer>
                                    <PosterItemsContainer>
                                        <Title>
                                            {movieDetails.title}
                                        </Title>
                                        <ContentContainer>
                                            <VotesContainer>
                                                <VoteIcon src={voteIcon} alt="Vote icon" />
                                                <VotesAverageBox>
                                                    <VotesBigContent>
                                                        {movieDetails.vote_average}
                                                    </VotesBigContent>
                                                    <VotesSmallContent>
                                                         / 10
                                                    </VotesSmallContent>
                                                </VotesAverageBox>
                                            </VotesContainer>
                                            <VotesSmallContent>
                                                {movieDetails.vote_count} votes
                                            </VotesSmallContent>
                                        </ContentContainer>
                                    </PosterItemsContainer>
                                </PosterShadowContainer>
                            </PosterBackgroundImageContainer>
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
                </div>
                : ""}
            {status === "loading"
                ? ""
                : <ToggleThemeButton />
            }
        </>
    );
};

export default MoviePage;