import styled from "styled-components"

const ModalZoomStyled = styled.dialog`
    background-color: black;
`

const ModalZoom = ( {photo} ) => {
    return (
        <ModalZoomStyled open={!!photo}>
            <p>Text</p>
            <form method="dialog">
                <button type="submit">OK</button>
            </form>
        </ModalZoomStyled>
    )
}

export default ModalZoom