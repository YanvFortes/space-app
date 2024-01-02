import styled from 'styled-components';
import Title from '../../Title';

const Container = styled.aside`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1.5em;
`

const Image = styled.img`
    width: 212px;
    height: 158px;
    border-radius: 12px;
`

const Button = styled.button`
    background-color: transparent;
    border: solid 2px #7B78E5;
    border-radius: 10px;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 600;
    height: 56px;
    width: 208px;
`

const Populars = ( {photos = []} ) => {
    return (
        <>
            <Container>
                <Title $align="right">Populars</Title>
                {photos.slice(0, 5).map(photo => (
                    
                    <Image src={photo.path}
                        key={photo.id}
                        photo={photo}
                    />
                ))}
                <Button>Show More</Button>
            </Container>
        </>
    )
}

export default Populars