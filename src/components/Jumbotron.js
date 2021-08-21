import styled from 'styled-components/macro'

const Jumbotron = ({ children, ...restProps}) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

const Container = styled.section`

`

export default Jumbotron