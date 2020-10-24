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
import WidthContainer from "../Common/WidthContainer";
import { movieKey } from '../keys';

const UniversalBigTile = ({ type, content }) => {
    let posterSize = "";
    if (type === movieKey) {
        posterSize = "w342";
    } else {
        posterSize = "h632";
    }
    const tileImageBaseLink = imageBaseLink(posterSize);

    let defaultDate = "";
    let imagePath = "";
    if (type === movieKey) {
        defaultDate = content.release_date;
        imagePath = content.poster_path;
    } else {
        defaultDate = content.birthday;
        imagePath = content.profile_path;
    }
    const date = new Date(defaultDate);


    return (
        <WidthContainer>
            <TileContainer>
                <PosterImage
                    src={tileImageBaseLink + imagePath}
                    type={type}
                />
                <ContentContainer type={type}>
                    <MovieTitle>{content && type === movieKey ? content.title : content.name}</MovieTitle>
                    {content && type && type === movieKey
                        ? <ReselaseYear>{date.getFullYear()}</ReselaseYear>
                        : ""}
                    <AdditionalContentContainer>
                        <AdditionalContentBox>
                            <AdditionalContentTitle>
                                {content && type && type === movieKey ? "Production:" : "Date of birth:"}
                            </AdditionalContentTitle>
                            <AdditionalContent>
                                {
                                    content.production_countries && type && type === movieKey
                                        ? content.production_countries.map(production_country =>
                                            production_country.name).join(", ")
                                        : date.toLocaleDateString()
                                }
                            </AdditionalContent>
                        </AdditionalContentBox>
                        <AdditionalContentBox>
                            <AdditionalContentTitle>
                                {content && type === movieKey
                                    ? "Release date:"
                                    : "Place of birth:"}
                            </AdditionalContentTitle>
                            <AdditionalContent>
                                {date && type && type === movieKey
                                    ? date.toLocaleDateString()
                                    : content.place_of_birth}
                            </AdditionalContent>
                        </AdditionalContentBox>
                    </AdditionalContentContainer>
                    {content && type && type === movieKey
                        ? <GenresBox>
                            {content.genres && content.genres.map(genre =>
                                <Genres key={genre.id}>{genre.name}</Genres>
                            )}
                        </GenresBox>
                        : ""}
                    {content && type && type === movieKey
                        ? <VotesContainer>
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
                        : ""}
                    <Overview>
                        {content && type && type === movieKey
                            ? content.overview
                            : content.biography}
                    </Overview>
                </ContentContainer>
            </TileContainer>
        </WidthContainer>
    )
}

export default UniversalBigTile