import { styled } from "styled-components"

const BannerStyled = styled.figure`
    align-items: center;
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    border-radius: 20px;
    display: flex;
    flex-grow: 1;
    min-height: 328px;
    margin: 0;
    max-width: 100%;
    width: 1156px;
    background-size: cover;
`

const TitleStyled = styled.h1`
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #FFFFFF;
    max-width: 320px;
    padding: 0 4em;
`

const Banner = ( {backgroundImage, text} ) => {
    return(
        <BannerStyled $backgroundImage={backgroundImage}>

            <TitleStyled>{text}</TitleStyled>

        </BannerStyled>
    )
}

export default Banner