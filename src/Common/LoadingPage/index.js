import React from "react";
import loadingRing from "../../assets/loadingRing.svg";
import { ImageContainer, StyledImage } from "./styled";

const LoadingPage = () => (
    <ImageContainer>
        <StyledImage
            src={loadingRing}
            alt="loadingRing"
        />
    </ImageContainer>
);

export default LoadingPage;