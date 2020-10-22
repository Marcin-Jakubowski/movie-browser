import styled from "styled-components";

export const TileContainer = styled.div`
    width: 324px;
    height: 650px;
    margin: 0 auto;
    padding: 16px;
    color: ${({theme}) => theme.color.mainFont};
`

export const PosterImage = styled.img`
    width: 292px;
    height: 434px;
`

export const MovieTitle = styled.p`
    font-size: 22px;
    line-height: 29px;
`

export const ReselaseYear = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.color.secondaryFont};
`

export const Genres = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: ${({theme}) => theme.color.secondaryFont};
    padding: 8px 16px;
    background-color: ${({theme}) => theme.color.genresBoxBackground};
`

export const VotesBox = styled.div`
    max-height: 24px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    display: grid;
    grid-template-columns: repeat()(3, 1fr);
    grid-gap: 12px;
`

export const VoteIcon = styled.img`
    width: 24px;
    display: block;
`
export const VotesCount = styled.div`
    color: ${({theme}) => theme.color.secondaryFont};
    font-weight: 600;
`