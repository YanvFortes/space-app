import { styled } from "styled-components"
import TextField from "../TextField"

const HeaderStyled = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 5em 0;

    .header__img {
        width: 212px;
    }
`



const Header = () => {
    return (
        <HeaderStyled>
            <img className="header__img" src="/img/logo.png"/>
            <TextField/>
        </HeaderStyled>
    )   
}

export default Header