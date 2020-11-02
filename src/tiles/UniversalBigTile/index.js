import React from "react";
import { movieKey } from '../../functionsAndKeys/keys';
import imageBaseLink from "../../functionsAndKeys/imageBaseLink";
import voteIcon from "../../assets/voteIcon.svg";
import noMovieImage from "../../assets/noMovieImage.svg";
import noPersonImage from "../../assets/noPersonImage.svg";
import {
    TileContainer,
    MobileTileContainer,
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
    VotesScale,
    VotesCount,
    Overview,
    LongOverview,
    MobileOverview,
} from "./styled";

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
        <MobileTileContainer>
            <TileContainer>
                <PosterImage
                    src={imagePath !== null
                        ? tileImageBaseLink + imagePath
                        : type === movieKey
                            ? noMovieImage
                            : noPersonImage
                    }
                    alt={type === movieKey ? content.title : content.name}
                    noImage={!content.poster_path}
                    type={type}
                />
                <ContentContainer type={type}>
                    <MovieTitle>
                        {content && type === movieKey
                            ? content.title
                            : content.name
                        }
                    </MovieTitle>
                    {defaultDate && content && type && type === movieKey
                        ? <ReselaseYear>{date.getFullYear()}</ReselaseYear>
                        : ""
                    }
                    <AdditionalContentContainer>
                        <AdditionalContentBox>
                            <AdditionalContentTitle>
                                {content && type && type === movieKey
                                    ? "Production:"
                                    : "Date of birth:"
                                }
                            </AdditionalContentTitle>
                            <AdditionalContent>
                                {content.production_countries && type && type === movieKey
                                    ? content.production_countries !== null
                                        ? content.production_countries.map(production_country =>
                                            production_country.name).join(", ")
                                        : "-"
                                    : defaultDate !== null
                                        ? date.toLocaleDateString()
                                        : "-"
                                }
                            </AdditionalContent>
                        </AdditionalContentBox>
                        <AdditionalContentBox>
                            <AdditionalContentTitle>
                                {content && type === movieKey
                                    ? "Release date:"
                                    : "Place of birth:"
                                }
                            </AdditionalContentTitle>
                            <AdditionalContent>
                                {date && type && type === movieKey
                                    ? defaultDate !== null ? date.toLocaleDateString() : "-"
                                    : content.place_of_birth !== null ? content.place_of_birth : "-"
                                }
                            </AdditionalContent>
                        </AdditionalContentBox>
                    </AdditionalContentContainer>
                    {content && type && type === movieKey
                        ? <GenresBox>
                            {content.genres && content.genres.map(genre =>
                                <Genres key={genre.id}>{genre.name}</Genres>
                            )}
                        </GenresBox>
                        : ""
                    }
                    {content && type && type === movieKey
                        ? <VotesContainer>
                            <VoteIcon src={voteIcon} />
                            <VotesBox>
                                <VotesAverage>
                                    {content.vote_average}
                                </VotesAverage>
                                <VotesScale>
                                    / 10
                                </VotesScale>
                                <VotesCount>
                                    {content.vote_count} votes
                                </VotesCount>
                            </VotesBox>
                        </VotesContainer>
                        : ""
                    }
                    <Overview>
                        {content && type && type === movieKey
                            ? content.overview.length < 1000 ? content.overview : ""
                            : content.biography.length < 1000 ? content.biography : ""
                        }
                    </Overview>
                </ContentContainer>
            </TileContainer>
            <LongOverview>
                {content && type && type === movieKey
                    ? content.overview.length >= 1000 ? content.overview : ""
                    : content.biography.length >= 1000 ? content.biography : ""
                }
            </LongOverview>
            <MobileOverview>
                {content && type && type === movieKey
                    ? content.overview
                    : content.biography
                }
            </MobileOverview>
        </MobileTileContainer>
    )
};

export default UniversalBigTile;