import React from "react";
import { TileContainer, PosterImage, MovieTitle, ReselaseYear, GenresBox, Genres, VotesBox, VotesAverage, VoteIcon, VotesCount } from "./styled";
import voteIcon from "../voteIcon.svg";
import imageBaseLink from "../imageBaseLink";
import { useSelector } from "react-redux";
import { selectGenres } from "../MoviesSlice";
import noImage from "../noMovieImage.svg"

const MovieSmallTile = ({ content }) => {
    const tileImageBaseLink = imageBaseLink("w342");
    const date = new Date(content.release_date);
    const genres = useSelector(selectGenres);

    return (
        <TileContainer>
            <PosterImage
                src={content.poster_path ? tileImageBaseLink + content.poster_path : noImage}
                alt={content.title}
                noImage={!content.poster_path}
            />
            <MovieTitle>{content.title}</MovieTitle>
            <ReselaseYear>{date.getFullYear()}</ReselaseYear>
            <GenresBox>
                {content.genre_ids && genres.genres && content.genre_ids.map((genre_id) => (
                    genres.genres.map(genre => genre.id === genre_id
                        ? <Genres key={genre.id}>{genre.name}</Genres>
                        : "")
                ))}
            </GenresBox>
            <VotesBox>
                <VoteIcon src={voteIcon} />
                <VotesAverage>
                    {content.vote_average}
                </VotesAverage>
                <VotesCount>
                    {content.vote_count} votes
                </VotesCount>
            </VotesBox>
        </TileContainer>
    )
}

export default MovieSmallTile