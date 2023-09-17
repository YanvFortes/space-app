import { styled } from "styled-components"

const NavItemStyled = styled.li`
    align-items: center;
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9' };
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    font-weight: ${ props => props.$active ? 700 : 500 };
    gap: .5em;
`

const NavItem = ({ children, activeIcon, disableIcon, active = false }) => {
    return(
        <NavItemStyled $active={active}>
            <img src={active ? activeIcon : disableIcon} alt="" />
            {children}
        </NavItemStyled>
    )
}

export default NavItem