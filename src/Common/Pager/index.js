import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectSelectedPage, setSelectedPage } from "../../MoviesSlice"
import { Wrapper, ButtonContainer, Button, TextContainer, Counter, Img, TextToHide } from "./styled"
import arrow from "./arrow.svg"
import disabledArrow from "./disabledArrow.svg"

const Pager = ({ content }) => {

    const dispatch = useDispatch()
    const page = useSelector(selectSelectedPage)
    const maxPage = content.total_pages

    return (
        <Wrapper>
            <ButtonContainer>
                <Button
                    disabled={page === 1}
                    onClick={() => dispatch(setSelectedPage("first"))}
                >
                    <Img
                        src={page === 1 ? disabledArrow : arrow}
                        alt="first page"
                        left
                    ></Img>
                    <TextToHide>
                        Last
                    </TextToHide>
                    <Img
                        src={page === 1 ? disabledArrow : arrow}
                        alt="first page"
                        left
                        second
                    ></Img>

                </Button>
                <Button
                    disabled={page === 1}
                    onClick={() => dispatch(setSelectedPage("previous"))}
                >
                    <Img
                        src={page === 1 ? disabledArrow : arrow}
                        alt="Previous page"
                        left
                    ></Img>
                    <TextToHide>
                        Previous
                    </TextToHide>
                </Button>
            </ButtonContainer>
            <TextContainer>
                Page
                <Counter>
                    {page}
                </Counter>
                of
                <Counter>
                    {maxPage}
                </Counter>
            </TextContainer>
            <ButtonContainer>
                <Button
                    disabled={page === maxPage}
                    onClick={() => dispatch(setSelectedPage("next"))}

                >
                    <TextToHide>
                        Next
                    </TextToHide>
                    <Img
                        src={page === maxPage ? disabledArrow : arrow}
                        alt="Next page"
                    ></Img>
                </Button>
                <Button
                    disabled={page === maxPage}
                    onClick={() => dispatch(setSelectedPage(maxPage))}
                >
                    <Img
                        src={page === maxPage ? disabledArrow : arrow}
                        alt="last page"
                        second
                    ></Img>
                    <TextToHide>
                        Last
                    </TextToHide>
                    <Img
                        src={page === maxPage ? disabledArrow : arrow}
                        alt="last page"
                    ></Img>
                </Button>
            </ButtonContainer>
        </Wrapper>
    )
}

export default Pager