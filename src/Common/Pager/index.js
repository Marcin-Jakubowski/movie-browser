import React from "react"
import { Wrapper, ButtonContainer, Button, TextContainer, Counter, Img, TextToHide } from "./styled"
import arrow from "./arrow.svg"
import disabledArrow from "./disabledArrow.svg"
import useQueryParameter from "../../useQueryParameter"
import useReplaceQueryParameter from "../../useReplaceQueryParameter"
import { pageKey } from "../../keys"
import { setStatus } from "../../MoviesSlice"
import { useDispatch } from "react-redux"

const Pager = ({ content, type }) => {

    const page = useQueryParameter(pageKey)
    const replaceQueryParameter = useReplaceQueryParameter()
    const dispatch = useDispatch()
    const maxPage = content.total_pages

    const pageNumber = Number(page)

    const onClickButton = (value) => {
        dispatch(setStatus("loading"))
        replaceQueryParameter(type, {
            key: pageKey,
            value: value,
        })
    }


    return (
        <Wrapper>
            <ButtonContainer>
                <Button
                    disabled={pageNumber === 1 || !pageNumber}
                    onClick={() => onClickButton(1)}
                >
                    <Img
                        src={pageNumber === 1 || !pageNumber ? disabledArrow : arrow}
                        alt="first page"
                        left
                    ></Img>
                    <TextToHide>
                        First
                    </TextToHide>
                    <Img
                        src={pageNumber === 1 || !pageNumber ? disabledArrow : arrow}
                        alt="first page"
                        left
                        second
                    ></Img>

                </Button>
                <Button
                    disabled={pageNumber === 1 || !pageNumber}
                    onClick={() => onClickButton(pageNumber - 1)}
                >
                    <Img
                        src={pageNumber === 1 || !pageNumber ? disabledArrow : arrow}
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
                    {pageNumber ? pageNumber : 1}
                </Counter>
                of
                <Counter>
                    {maxPage}
                </Counter>
            </TextContainer>
            <ButtonContainer>
                <Button
                    disabled={pageNumber === maxPage}
                    onClick={() => onClickButton(pageNumber ? pageNumber + 1 : 1 + 1)}

                >
                    <TextToHide>
                        Next
                    </TextToHide>
                    <Img
                        src={pageNumber === maxPage ? disabledArrow : arrow}
                        alt="Next page"
                    ></Img>
                </Button>
                <Button
                    disabled={pageNumber === maxPage}
                    onClick={() => onClickButton(maxPage)}

                >
                    <Img
                        src={pageNumber === maxPage ? disabledArrow : arrow}
                        alt="last page"
                        second
                    ></Img>
                    <TextToHide>
                        Last
                    </TextToHide>
                    <Img
                        src={pageNumber === maxPage ? disabledArrow : arrow}
                        alt="last page"
                    ></Img>
                </Button>
            </ButtonContainer>
        </Wrapper>
    )
}

export default Pager