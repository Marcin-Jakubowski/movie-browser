import React from "react";
import imageBaseLink from "../../imageBaseLink";
import noImage from "../../noPersonImage.svg";
import { Container, Name, StyledImage, JobOrCharacterName, Icon } from "./styled";

const PersonTile = ({ person, castAndCrew }) => {
    const imageLink = `${imageBaseLink("w500")}${person.profile_path}`;

    return (

        <Container>
            <StyledImage
                alt={person.name}
                src={imageLink}
                noImage={!person.profile_path}
            >
                <Icon
                    src={noImage}
                    noImage={!person.profile_path}
                />
            </StyledImage>
            <Name>
                {person.name}
            </Name>
            {castAndCrew ?
                <JobOrCharacterName>
                    {castAndCrew === "cast" ? person.character : person.job}
                </JobOrCharacterName>
                :
                ""
            }
        </Container>
    )
};

export default PersonTile;