import styled, { css } from "styled-components";
import { movieKey } from '../keys';

export const TileContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0px;
    display: flex;
`;

export const MobileTileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 64px auto;
    padding: 40px;
    color: ${({ theme }) => theme.color.mainFont};
    background-color: ${({ theme }) => theme.color.tileBackground};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 24px auto;
    padding: 24px;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 16px auto;
    padding: 16px;
    }
`;

export const PosterImage = styled.img`
    width: ${({ type }) => type === movieKey ? 312 : 399}px;
    height: ${({ type }) => type === movieKey ? 464 : 564}px;
    border-radius: 5px;
    flex-shrink: 0;

    ${({ noImage }) => noImage && css`
        background-color: ${({ theme }) => theme.color.noImageBackground};
        background-size: initial;
        background-repeat: no-repeat;
    `}
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: ${({ type }) => type === movieKey ? 228 : 232}px;
        height: ${({ type }) => type === movieKey ? 338 : 326}px;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: ${({ type }) => type === movieKey ? 114 : 116}px;
        height: ${({ type }) => type === movieKey ? 169 : 163}px;
    }
`;

export const ContentContainer = styled.div`
    max-height: 100%;
    margin-left: 40px;
    padding: 8px 0;
    display: grid;
    grid-template-rows: ${({ type }) => type === movieKey
        ? "repeat(6, auto)"
        : "repeat(3, auto)"} 1fr;
    grid-gap: 24px;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: 24px;
    padding: 8px 0;
    grid-gap: 12px;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: 16px;
    padding: 0;
    grid-gap: 8px;
    }

`;

export const MovieTitle = styled.h3`
    font-size: 36px;
    line-height: 43px;
    font-weight: 600;
    margin: 0;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    line-height: 21px;
    }
`;

export const ReselaseYear = styled.h4`
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    margin: 0;
    display: flex;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    line-height: 21px;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
    line-height: 17px;
    color: ${({ theme }) => theme.color.secondaryFont};
    }
`;

export const AdditionalContentContainer = styled.div`
    font-size: 18px;
    line-height: 22px;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-gap: 8px;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 18px;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.secondaryFont};
    }
`;

export const AdditionalContentBox = styled.div`
    display: flex;
`;

export const AdditionalContentTitle = styled.div`
    color: ${({ theme }) => theme.color.secondaryFont};
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: ${({ type }) => type === movieKey
        ? "none"
        : "block"};
    }
`;

export const AdditionalContent = styled.div`
    padding: 0 10px;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: ${({ type }) => type === movieKey
        ? "0"
        : "0 10px"};
        color: ${({ theme }) => theme.color.mainFont};
    }
`;

export const GenresBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const Genres = styled.div`
    font-size: 14px;
    line-height: 14px;
    padding: 8px 16px;
    margin: 0 16px 16px 0;
    background-color: ${({ theme }) => theme.color.genresBoxBackground};
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 12px;
    padding: 8px 12px;
    margin: 0 12px 12px 0;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
    line-height: 11px;
    padding: 8px 8px;
    margin: 0 8px 8px 0;
    }
`;

export const VotesContainer = styled.div`
    max-height: 32px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    display: flex;
    align-self: end;
    align-items: center;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-height: 24px;
    font-size: 13px;
    line-height: 24px;
    }
`;

export const VoteIcon = styled.img`
    width: 24px;
    display: block;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
    }
`;

export const VotesBox = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const VotesAverage = styled.div`
    padding: 0 8px;
    font-size: 22px;
    line-height: 29px;
    font-weight: 500;
    line-height: 1;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 24px;
        font-weight: 600;
    }
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 24px;
        font-weight: 600;
    }
`;

export const VotesScale = styled.div`
    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: none;
        color: ${({ theme }) => theme.color.secondaryFont};
    }
`;

export const VotesCount = styled.div`
    padding: 0 12px;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0 8px;
    color: ${({ theme }) => theme.color.secondaryFont};
    }
`;

export const Overview = styled.div`
    font-size: 20px;
    line-height: 32px;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const MobileOverview = styled.div`
    display: none;
    padding: 16px 0;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: block;
        font-size: 16px;
        line-height: 24px;
    }

    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        line-height: 22px;
        padding: 12px 0;
    }
`;