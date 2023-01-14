import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
    width: 85%;
    min-height: 15rem;

    margin-top: 6rem;
    margin-bottom: 0.5rem;

    >p{
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        line-height: 2.15rem;
        color: ${(props) => props.theme['base-subtitle']};
        margin-bottom: 3rem;
    }
`

export const CoffeeList = styled.div`
    width: 100%;
    padding: 1rem 0 3rem;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
