import React from "react"
import { Container, Name, StyledLink, StyledImage, JobOrCharacterName } from "./styled"
import imageBaseLink from "../../imageBaseLink"
import noImage from "./noImage.svg"



const PersonTile = ({ person, castAndCrew }) => {

    const imageLink = `${imageBaseLink("w500")}${person.profile_path}`


    return (
        <StyledLink
            to={`/people/${person.id}`}
        >
            <Container>
                <StyledImage
                    alt={person.name}
                    src={person.profile_path ? imageLink : noImage}
                    noImage={!person.profile_path}
                />
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
        </StyledLink>
    )
}

export default PersonTile 