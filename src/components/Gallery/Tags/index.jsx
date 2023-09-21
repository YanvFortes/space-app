import styled from "styled-components"
import tags from "./tags.json"

const TagsContainer = styled.div`
    align-items: center;
    color: #FFFFFF;
    display: flex;
    font-size: 1.25rem;
    gap: 1.25em;
    padding: 1em 0;
`

const ButtonStyled = styled.button`
    background-color: #D9D9D94D;
    border: ${props => props.$active ? "2px solid #7B78E5" : none};
    border-radius: 10px;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0.5rem ;
`

const Tags = () => {
    return (
        <TagsContainer>
            <p>Search for tags:</p>
            {tags.map(tag => 
                <ButtonStyled key={tag.id} $active={true}> 
                    {tag.title} 
                </ButtonStyled>
            )}
        </TagsContainer>
    )
}

export default Tags