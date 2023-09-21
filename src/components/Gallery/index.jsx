import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Populars from "./Populars"
import Picture from "../Picture"

const GalleryContainer = styled.div`
    display: flex;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const Gallery = ( {photos = []} ) => {
    return (
        <>      
            <Tags/>
            <GalleryContainer>
                <FluidSection>
                    <Title>Browse the gallery</Title>
                    <Picture photo={photos.map(photo => photo)}/>
                </FluidSection>
                <Populars/>
            </GalleryContainer>
        </>
    )
}

export default Gallery