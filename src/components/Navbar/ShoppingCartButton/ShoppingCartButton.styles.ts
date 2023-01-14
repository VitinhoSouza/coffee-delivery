import styled from 'styled-components'

export const ShoppingCartButtonContainer = styled.button`
    height: 38px;
    width: 38px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['yellow-light']};
    border: none;
    cursor: pointer;

    svg{
        position: absolute;
        path, circle{
            stroke: ${(props) => props.theme['yellow-dark']};
            fill: ${(props) => props.theme['yellow-dark']};
        }
    }
`

export const CountItemsContainer = styled.div`
    height: 11px;
    width: 11px;
    padding: 10px;
    border-radius: 100px;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    font-size: 12px;
    font-weight: 700;

    position: relative;
    margin-left: 36px;
    margin-bottom: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
`