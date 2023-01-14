import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
    padding-top: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const HomeIntro = styled.div`
    width: 85%;
    min-height: 15rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    >img{
        max-width: 90%;
    }

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`

export const HomeInfo = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 85%;
    }
`

export const Title = styled.div`
    width: 100%;
    margin-bottom: 3rem;

    p{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2.85rem;
        line-height: 3.75rem;
        color: ${(props)=> props.theme['base-title']};
        
        margin-bottom: 1rem;
    }

    span{
        font-size: 1.25rem;
        line-height: 1.6rem;
        color: ${(props)=> props.theme['base-subtitle']};
    }
`

export const ItemsContainer = styled.div`
    width: 100%;
    min-height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Item = styled.div`
    min-width: 14rem;

    display: flex;
    align-items: center;

    &:nth-child(4){
        padding-right: 0.7rem;
    }

    padding: 1rem 0;
`
const TYPE_COLORS = {
    safetyBuy: 'yellow-dark',
    fastDelivert: 'yellow',
    packing: 'base-text',
    freshCoffee: 'purple'
} as const

interface TypeProps {
    typeColor: keyof typeof TYPE_COLORS
}

export const ButtonContainer = styled.div<TypeProps>`
    min-height: 1.85rem;
    min-width: 1.85rem;
    border-radius: 1000px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.7rem;

    background: ${(props) => props.theme[TYPE_COLORS[props.typeColor]]};

    svg{
        position: absolute;
        path, circle{
            stroke: ${(props) => props.theme.white};
            fill: ${(props) => props.theme.white};
        }
    }
`



