import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import ModalZoom from "./components/ModalZoom"

import photos from "./photos.json"
import { useState } from "react"

const App = () => {

    const [galleryPhotos, setGalleryPhotos] = useState(photos)
    const [selectedPhotos, setSelectedPhotos] = useState(null)

    const onToggleFavorite = (photo) => {
        if (photo.id === selectedPhotos?.id) {
            setSelectedPhotos({
            ...selectedPhotos,
            favorite: !selectedPhotos.favorite
          })
        }
        setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
          return {
            ...galleryPhoto,
            favorite: galleryPhoto.id === photo.id ? !photo.favorite : galleryPhoto.favorite
          }
        }))
      }

    const BackgroundGradient = styled.div`
        background: linear-gradient(174.61deg, #041883 4.16%, #04244F 48%, #154580 96.76%);
        height: 375vh;
    `
    const AppContainer = styled.div`
        box-sizing: border-box;
        height: 100vh;
        margin: 0 auto;
        max-width: 100%;
        padding: 0 1em;
        width: 1440px;
    `
    const MainContainer = styled.section`
        display: flex;
        gap: 2em;
    `
    const GalleryContent = styled.div`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    `

    return (

            <BackgroundGradient>
                <GlobalStyles/>
                <AppContainer>
                    <Header/>
                    <MainContainer>
                        <SideBar/>
                        <GalleryContent>
                            <Banner
                                backgroundImage="/img/banner.png"
                                text="The best galery of universe photos!"
                            />
                            <Gallery 
                                photos={galleryPhotos}
                                onSelectPhoto={photo => setSelectedPhotos(photo)}
                                onToggleFavorite={onToggleFavorite}
                            />
                        </GalleryContent>                        
                    </MainContainer>
                </AppContainer>
                <ModalZoom 
                    photo={selectedPhotos} 
                    onClose={() => setSelectedPhotos(null)}
                    onToggleFavorite={onToggleFavorite}
                />
            </BackgroundGradient>

    )
}

export default App
