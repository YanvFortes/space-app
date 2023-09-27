import styled from "styled-components"
import Button from "./Button"
import { AiFillHeart, AiOutlineArrowsAlt } from "react-icons/ai"

const PictureContainer = styled.figure`
    background-color: #001634;
    border-radius: 16px;
    box-shadow: 0px 4px 4px #00000026;
    height: 336px;
    width: 448px;
`

const ImageStyled = styled.img`
    border-radius: 16px 16px 0 0;
    height: 256px;
    width: 100%;
`

const DescriptionContainer = styled.figcaption`
    padding: 1em;
`

const PictureTitle = styled.h3`
    color: #FFFFFF;
    font-size: 1.25rem;
    font-weight: 700;
`

const PictureFooter = styled.footer`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 1em;
`

const PictureCredits = styled.p`
    color: #FFFFFF;
`

const Picture = ( {photo, onZoomRequested} ) => {
        
    return (
        <PictureContainer>
            <ImageStyled src={photo.path} alt={photo.title} />
            <DescriptionContainer>
                <PictureTitle>{photo.title}</PictureTitle>
                <PictureFooter>
                    <PictureCredits>{photo.font}</PictureCredits>
                    <ButtonsContainer>
                        <Button>
                            <AiFillHeart/>
                        </Button>
                        <Button onClick={() => onZoomRequested}>
                            <AiOutlineArrowsAlt/>
                        </Button>
                    </ButtonsContainer>
                </PictureFooter>
            </DescriptionContainer>
        </PictureContainer>
    )
}

export default Picture