import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Populars from "./Populars"

const FluidSection = styled.section`

`
const GalleryContainer = styled.div`
    display: flex;
`

const Gallery = () => {
    return (
        <>      
            <Tags/>
            <GalleryContainer>
                <FluidSection>
                    <Title>Browse the gallery</Title>
                </FluidSection>
                <Populars/>
                
            </GalleryContainer>
        </>
    )
}

export default Gallery