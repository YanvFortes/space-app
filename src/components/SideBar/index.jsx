import { styled } from "styled-components"
import NavItem from "./NavItem"

const ListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 212px;
`

const SideBar = () => {
    return(
        <aside>
            <nav>
                <ListStyled>
                    <NavItem 
                        active
                        activeIcon="img/icons/Home-active.png"
                        disableIcon="img/icons/Home-disable.png"
                    >
                        Home
                    </NavItem>
                    <NavItem 
                        active={false}
                        activeIcon="img/icons/MoreLikes-active.png"
                        disableIcon="img/icons/MoreLikes-disable.png"
                    >
                        More likes
                    </NavItem>
                    <NavItem 
                        active={false}
                        activeIcon="img/icons/MostViewed-active.png"
                        disableIcon="img/icons/MostViewed-disable.png"
                    >
                        Most viewed
                    </NavItem>
                    <NavItem 
                        active={false}
                        activeIcon="img/icons/News-active.png"
                        disableIcon="img/icons/News-disable.png"
                    >
                        News
                    </NavItem>
                    <NavItem 
                        active={false}
                        activeIcon="img/icons/Home-active.png"
                        disableIcon="img/icons/Home-disable.png"
                    >
                        Surprise me
                    </NavItem>
                </ListStyled>
            </nav>
        </aside>
    )
}

export default SideBar