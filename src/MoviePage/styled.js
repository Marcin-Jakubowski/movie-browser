import styled from "styled-components";

export const PosterBackgrundContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.color.posterBackground};
    height: 770px;

    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        height: 40vw;
    }
`;

export const PosterBackgroundImageContainer = styled.div`
    margin: 0 auto;
    max-width: 1920px; 
    max-height: 770px;
    height: 100%;
    background-image: url(${({ link }) => link});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    color: ${({theme}) => theme.color.posterFont};
`;

export const PosterShadowContainer = styled.div`
    background-image: linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);   
    height: 100%;
`;

export const PosterItemsContainer = styled.div`
    margin: 0 auto;
    max-width: 1368px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 56px 0;

    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        padding: 16px;
    }
`;

export const Title = styled.h3`
    font-size: 64px;
    line-height: 77px;
    font-weight: 600;
    margin: 0;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        font-size: 36px;
        line-height: 44px;
    }

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 24px;
        line-height: 29px;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        flex-direction: row;
        align-items: center;
        margin: 0;
    }
`;

export const VotesContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 24px 0 16px;

    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        flex-direction: row;
        margin: 0;
    }
`;

export const VoteIcon = styled.img`
    display: block;
    width: 40px;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        width: 24px;
    }

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
    }
`;

export const VotesAverageBox = styled.div`
    display: flex;
    align-items: flex-end;

    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        align-items: center;
    }
`;

export const VotesSmallContent = styled.div`
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        font-size: 12px;
        line-height: 16px;
        padding-right: 8px;
    }

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        line-height: 12px;
    }
`;

export const VotesBigContent = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin: 0 8px;
    line-height: 1;
    
    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 17px;
    }
`;