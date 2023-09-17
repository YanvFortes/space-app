import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"

function App() {

    const BackgroundGradient = styled.div`
        background: linear-gradient(174.61deg, #041883 4.16%, #04244F 48%, #154580 96.76%);
        box-sizing: border-box;
        min-height: 100vh;
        padding: 0 1em;
        width: 100%;

        .initial {
            display: flex;
            box-sizing: border-box;
            gap: 2.5em;
        }
    `

    return (
        <>
            <GlobalStyles/>
            <BackgroundGradient>
                <Header/>
                <section className="initial">
                    <SideBar/>
                    <Banner/>
                </section>

            
            </BackgroundGradient>
        </>
    )
}

export default App
