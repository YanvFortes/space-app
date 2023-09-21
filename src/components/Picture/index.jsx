import styled from "styled-components"

const PictureContainer = styled.figure`
    border-radius: 16px;
    box-shadow: 0px 4px 4px #00000026;
`

const PictureTitle = styled.h3`
    color: #FFFFFF;
`

const Picture = ( {photo} ) => {
    console.log(photo)
    return (
        <PictureContainer>
            <img src={photo.path} alt={photo.title} />
            <figcaption>
                <PictureTitle>{photo.title}</PictureTitle>
                <footer>
                    <p></p>
                    <button></button>
                    <button></button>
                </footer>
            </figcaption>
        </PictureContainer>
    )
}

export default Picture