import styled from "styled-components"
import Picture from "../Picture"
import Button from "../Button"
import { IoClose } from "react-icons/io5";

const ModalZoomStyled = styled.dialog`
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    padding: 0;
    position: fixed;
    top: 100px;
    
    

    figure{
        width: 1164px;
        height: 580px;
        img{
            height: 85%;
        }
    }
    
    form{
        button{
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const Overlay = styled.div`
    background-color: #000000b2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`


const ModalZoom = ( {photo, onClose, onToggleFavorite} ) => {
    return (
        <>
            {photo && <>
                <Overlay/>
                <ModalZoomStyled open={!!photo} onClose={onClose}>
                    <Picture photo={photo} expanded={true} onToggleFavorite={onToggleFavorite}/>
                    <form method="dialog">
                        <Button formMethod="dialog">
                            <IoClose/>
                        </Button>
                    </form>
                </ModalZoomStyled>
            </>}
        </>
    )
}

export default ModalZoom