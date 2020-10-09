import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectPageInformation, selectSelectedPage, setSelectedPage } from "../../Movies/MoviesSlice"
import { Wrapper, ButtonContainer, Button, TextContainer, Counter } from "./styled"
import {ReactComponent as Arrow} from "../../../public/arrow.svg" 

const Pager = () => {

    const dispatch = useDispatch()

    const page = useSelector(selectSelectedPage)
    const currentPageInformation = useSelector(selectPageInformation)

    const maxPage = currentPageInformation.total_pages

    return (
        <Wrapper>
            <ButtonContainer>
                <Button
                    disabled={page === 1}
                    onClick={() => dispatch(setSelectedPage("first"))}
                >
                    First
                </Button>
                <Button
                    disabled={page === 1}
                    onClick={() => dispatch(setSelectedPage("previous"))}
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
                    onClick={() => dispatch(setSelectedPage("next"))}
                >
                    Next
                </Button>
                <Button
                    disabled={page === maxPage}
                    onClick={() => dispatch(setSelectedPage(maxPage))}
                >
                    Last 
                    <Arrow />
                </Button>
            </ButtonContainer>
        </Wrapper>
    )
}

export default Pager