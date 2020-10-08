import React from "react"
import { useSelector } from "react-redux"
import { selectPageInformation, selectSelectedPage } from "../../Movies/MoviesSlice"
import { Wrapper, ButtonContainer, Button, TextContainer, Counter } from "./styled"

const Pager = () => {

    const page = useSelector(selectSelectedPage)
    const currentPageInformation = useSelector(selectPageInformation)
    const maxPage = currentPageInformation.total_pages

    return (
        <Wrapper>
            <ButtonContainer>
                <Button
                    disabled={page === 1}
                >
                    First
                </Button>
                <Button
                    disabled={page === 1}
                >
                    Previous
                </Button>
            </ButtonContainer>
            <TextContainer>
                Page
                <Counter>
                    &nbsp;{page}&nbsp;
                </Counter>
                of
                <Counter>
                    &nbsp;{maxPage}&nbsp;
                </Counter>
            </TextContainer>
            <ButtonContainer>
                <Button
                    disabled={page === maxPage}
                >
                    Next
                </Button>
                <Button
                    disabled={page === maxPage}
                >
                    Last
                </Button>
            </ButtonContainer>
        </Wrapper>
    )
}

export default Pager