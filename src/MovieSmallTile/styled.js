import styled, { css } from "styled-components";

export const TileContainer = styled.div`
    width: 324px;
    height: 100%;
    margin: 0 auto;
    padding: 16px;
    color: ${({ theme }) => theme.color.mainFont};
    font-weight: 400;
    background-color: ${({ theme }) => theme.color.tileBackground};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-direction: row;
        width: 100%;
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(3, auto) 1fr;
    grid-gap: 8px;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding-left: 16px;
    }
`

export const PosterImage = styled.img`
    width: 292px;
    height: 434px;
    margin: 0 0 8px;
    border-radius: 5px;
    flex-shrink: 0;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 114px;
        height: 169px;
        margin: 0;
    }

    ${({ noImage }) => noImage && css`
        background-color: ${({ theme }) => theme.color.noImageBackground};
        background-size: initial;
        background-repeat: no-repeat;
    `}
`

export const MovieTitle = styled.h3`
    font-size: 22px;
    line-height: 29px;
    font-weight: 500;
    margin: 0;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    line-height: 21px;
    }
`

export const ReselaseYear = styled.h4`
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.secondaryFont};
    margin: 0;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
    line-height: 17px;
    color: ${({ theme }) => theme.color.secondaryFont};
    }
`

export const Genres = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.color.mainFont};
    padding: 8px 16px;
    margin: 0 8px 8px 0;
    background-color: ${({ theme }) => theme.color.genresBoxBackground};
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px;
    }
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
    display: flex;
    align-self: end;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-height: 24px;
    font-size: 13px;
    line-height: 24px;
    }
`

export const VoteIcon = styled.img`
    width: 24px;
    display: block;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 16px;
    }
`

export const VotesAverage = styled.div`
    padding: 0 12px;
    font-weight: 600;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 24px;
        font-weight: 600;
        padding: 0 8px;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        padding: 0 4px;
    }
`

export const VotesCount = styled.div`
    color: ${({ theme }) => theme.color.secondaryFont};
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        color: ${({ theme }) => theme.color.secondaryFont};
    }
`