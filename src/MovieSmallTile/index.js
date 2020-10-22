import React from "react";
import { TileContainer, PosterImage, MovieTitle, Genres, VotesBox, VoteIcon, VotesCount } from "./styled";
import smallVoteIcon from "./smallVoteIcon.svg";
import imageBaseLink from "../imageBaseLink";

const MovieSmallTile = ({fragment}) => {
    const tileImageBaseLink = imageBaseLink("w342");
    console.log('"' + tileImageBaseLink + fragment.poster_path + '"');

    return (
        <TileContainer>
            <PosterImage src={tileImageBaseLink + fragment.poster_path} />
            <MovieTitle>{fragment.original_title}</MovieTitle>
            <Genres></Genres>
            <VotesBox>
                <VoteIcon src={smallVoteIcon} />
                <div>
                    {fragment.vote_average}
                </div>
                <VotesCount>
                    {fragment.vote_count} votes
                </VotesCount>
            </VotesBox>
        </TileContainer>
    )
}

export default MovieSmallTile