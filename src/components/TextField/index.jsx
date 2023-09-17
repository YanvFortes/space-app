import { styled } from "styled-components"
import search from "/img/search.svg"

const ContainerStyled = styled.div`
    display: inline-block;
    position: relative;
`

const TextFieldStyled = styled.input`
    background-color: transparent;
    border: solid 2px #C98CF1;
    border-radius: 10px;
    box-sizing: border-box;
    color: #D9D9D9;
    font-size: 1.25rem;
    font-weight: 400;
    height: 56px;
    line-height: 1.25em;
    padding: 0.75em 1em;
    width: 602px;

`

const MagnifierIcon = styled.img`
    height: 38px;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 38px;
`

const TextField = ( props ) => {
    return (
        <ContainerStyled>
            <TextFieldStyled placeholder="What are you looking?" {...props}/>
            <MagnifierIcon src={search} alt="Magnifier Icon"/>
        </ContainerStyled>
    )
}
 
export default TextField