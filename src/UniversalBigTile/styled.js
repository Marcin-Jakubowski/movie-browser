import styled from "styled-components";
import { movieKey } from '../keys';

export const TileContainer = styled.div`
    width: 100%;
    min-height: 464px;
    height: 100%;
    margin: 64px auto;
    padding: 40px;
    color: ${({ theme }) => theme.color.mainFont};
    background-color: ${({ theme }) => theme.color.tileBackground};
    display: flex;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
`;

export const PosterImage = styled.img`
    width: ${({ type }) => type === movieKey ? 312 : 399}px;
    height: ${({ type }) => type === movieKey ? 464 : 564}px;
    border-radius: 5px;
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

`;

export const MovieTitle = styled.p`
    font-size: 36px;
    line-height: 43px;
    font-weight: 600;
    margin: 0;
`;

export const ReselaseYear = styled.p`
    font-size: 22px;
    line-height: 26px;
    margin: 0;
    display: flex;
`;

export const AdditionalContentContainer = styled.div`
    font-size: 18px;
    line-height: 22px;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-gap: 8px;
`;

export const AdditionalContentBox = styled.div`
    display: flex;
`;

export const AdditionalContentTitle = styled.div`
    color: ${({ theme }) => theme.color.secondaryFont};
`;

export const AdditionalContent = styled.div`
    padding: 0 10px;
`;

export const GenresBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const Genres = styled.div`
    font-size: 14px;
    line-height: 20px;
    padding: 8px 16px;
    margin: 0 8px 8px 0;
    background-color: ${({ theme }) => theme.color.genresBoxBackground};
`;

export const VotesContainer = styled.div`
    max-height: 24px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    display: flex;
    align-self: end;
    align-items: center;
`;

export const VoteIcon = styled.img`
    width: 24px;
    display: block;
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
`;

export const VotesCount = styled.div`
    padding: 0 12px;
`;

export const Overview = styled.div`
    font-size: 20px;
    line-height: 32px;
`;