import styled from "styled-components"

const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    font-size: 1.5rem;
`

const Button = ({ children }) => {
    return (
        <ButtonStyled>
            {children}
        </ButtonStyled>
    )
}

export default Button