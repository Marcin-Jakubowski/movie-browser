import React from "react";
import imageBaseLink from "../../imageBaseLink";
import noImage from "../../noPersonImage.svg";
import { Container, Name, StyledImage, JobOrCharacterName } from "./styled";

const PersonTile = ({ person, castAndCrew }) => {
    const imageLink = `${imageBaseLink("w500")}${person.profile_path}`;

    return (
        <Container>
            <StyledImage
                alt={person.name}
                src={person.profile_path ? imageLink : noImage}
                noImage={!person.profile_path}
            />
            <Name>
                {person.name}
            </Name>
            {castAndCrew
                ? <JobOrCharacterName>
                    {castAndCrew === "cast" ? person.character : person.job}
                </JobOrCharacterName>
                : ""}
        </Container>
    )
};

export default PersonTile ;