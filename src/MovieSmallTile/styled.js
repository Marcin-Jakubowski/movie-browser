import styled from "styled-components";

export const TileContainer = styled.div`
    width: 324px;
    min-height: 650px;
    height: 100%;
    margin: 0 auto;
    padding: 16px;
    color: ${({theme}) => theme.color.mainFont};
    background-color: ${({theme}) => theme.color.tileBackground};
    display: grid;
    grid-template-rows: repeat(4, auto) 1fr;
    grid-gap: 8px;
`

export const PosterImage = styled.img`
    width: 292px;
    height: 434px;
    margin: 0 0 8px;
`

export const MovieTitle = styled.p`
    font-size: 22px;
    line-height: 29px;
    margin: 0;
`

export const ReselaseYear = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.color.secondaryFont};
    margin: 0;
`

export const Genres = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: ${({theme}) => theme.color.mainFont};
    padding: 8px 16px;
    margin: 0 8px 8px 0;
    background-color: ${({theme}) => theme.color.genresBoxBackground};
`

export const GenresBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export const VotesBox = styled.div`
    max-height: 24px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    display: flex;
    align-self: end;
`

export const VoteIcon = styled.img`
    width: 24px;
    display: block;
`

export const VotesAverage = styled.div`
    padding: 0 12px;
`
export const VotesCount = styled.div`
    color: ${({theme}) => theme.color.secondaryFont};
    font-weight: 600;
`