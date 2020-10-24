import React from "react";
import {
    TileContainer,
    PosterImage,
    ContentContainer,
    MovieTitle,
    ReselaseYear,
    AdditionalContentContainer,
    AdditionalContentBox,
    AdditionalContentTitle,
    AdditionalContent,
    GenresBox,
    Genres,
    VotesContainer,
    VoteIcon,
    VotesBox,
    VotesAverage,
    VotesCount,
    Overview
} from "./styled";
import voteIcon from "../voteIcon.svg";
import imageBaseLink from "../imageBaseLink";
import { useSelector } from "react-redux";
import { selectGenres } from "../MoviesSlice";
import WidthContainer from "../Common/WidthContainer";

const UniversalBigTile = ({ type, content }) => {
    const tileImageBaseLink = imageBaseLink("w342");
    const date = new Date(content.release_date);
    const genres = useSelector(selectGenres);


    return (
        <WidthContainer>
            <TileContainer>
                <PosterImage src={tileImageBaseLink + content.poster_path} />
                <ContentContainer>
                    <MovieTitle>{content.title}</MovieTitle>
                    <ReselaseYear>{date.getFullYear()}</ReselaseYear>
                    <AdditionalContentContainer>
                        <AdditionalContentBox>
                            <AdditionalContentTitle>
                                Production:
                            </AdditionalContentTitle>
                            <AdditionalContent>
                                {content.production_countries
                                && content.production_countries.map(production_country =>
                                    production_country.name
                                ).join(", ")
                                }
                            </AdditionalContent>
                        </AdditionalContentBox>
                        <AdditionalContentBox>
                            <AdditionalContentTitle>
                                Release date:
                            </AdditionalContentTitle>
                            <AdditionalContent>
                                {date.toLocaleDateString()}
                            </AdditionalContent>
                        </AdditionalContentBox>
                    </AdditionalContentContainer>
                    <GenresBox>
                        {content.genres && content.genres.map(genre =>
                            <Genres>{genre.name}</Genres>
                        )
                        }
                    </GenresBox>
                    <VotesContainer>
                        <VoteIcon src={voteIcon} />
                        <VotesBox>
                            <VotesAverage>
                                {content.vote_average}
                            </VotesAverage>
                            <div>
                                / 10
                            </div>
                            <VotesCount>
                                {content.vote_count} votes
                        </VotesCount>
                        </VotesBox>
                    </VotesContainer>
                    <Overview>{content.overview}</Overview>
                </ContentContainer>
            </TileContainer>
        </WidthContainer>
    )
}

export default UniversalBigTile