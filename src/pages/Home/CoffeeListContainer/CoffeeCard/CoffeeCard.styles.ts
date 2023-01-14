import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
    background-color: ${(props)=>props.theme['base-card']};
    border-radius: 6px 36px;

    width: 16rem;
    height: 19.375rem;

    margin-top: 2rem;

    >img{
        position: relative;
        margin: 0 auto;
        margin-top: -1rem;
        max-width: 7.5rem;
        max-height: 7.5rem;
    }

    display: flex;
    flex-direction: column;

`

export const CardInfo = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;

    p{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.625rem;
        margin-bottom: 0.5rem;
    }

    span{
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.125rem;
        color: ${(props) => props.theme['base-label']};
    }
`

export const TagContainer = styled.div`
    width: 95%;
    margin: 1rem auto 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Tag = styled.div`
    padding: 0 0.3rem;
    border-radius: 100px;

    font-weight: 700;
    font-size: 0.625rem;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;

    & + &{
        margin-left: 0.5rem;
    }
`

export const CountContainer = styled.div`
    width: 90%;
    margin: 1rem auto 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonContainer = styled.button`
    height: 38px;
    width: 38px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;

    background: ${(props) => props.theme['purple-dark']};
    border: none;
    cursor: pointer;

    &:hover{
        background: ${(props) => props.theme['purple']};
    }

    svg{
        path, circle{
            stroke: ${(props) => props.theme.white};
            fill: ${(props) => props.theme.white};
        }
    }
`

export const ValueContainer = styled.div`
    font-size: 0.875rem;

    span{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 1.5rem;
        color: ${(props) => props.theme['base-text']};
    }
`