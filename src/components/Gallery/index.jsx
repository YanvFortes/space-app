import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Populars from "./Populars"
import Picture from "../Picture"

const GalleryContainer = styled.div`
    display: flex;
`

const FluidSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1.5em;
`

const PictureList = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
`

const Gallery = ( {photos = [], onSelectPhoto} ) => {
    return (
        <>      
            <Tags/>
            <GalleryContainer>
                <FluidSection>
                    <Title>Browse the gallery</Title>
                    <PictureList>
                        {photos.map(photo => (
                            <Picture 
                                key={photo.id} 
                                photo={photo}
                                onZoomRequested={onSelectPhoto}
                            />
                        ))}
                    </PictureList>
                </FluidSection>
                <Populars/>
            </GalleryContainer>
        </>
    )
}

export default Gallery