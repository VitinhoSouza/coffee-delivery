import styled from 'styled-components'

export const CountSelectContainer = styled.div`
    height: 2.5rem;
    width: 4.5rem;
    margin-left: 1rem;

    background-color: ${(props)=> props.theme['base-button']};
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    >span{
        color: ${(props)=>props.theme['base-title']};
        font-size: 1rem;
    }
`

interface CountButtonProps {
    higher?: boolean
}

export const CountButton = styled.button<CountButtonProps>`
  background-color: transparent;

  border: 0;
  cursor: pointer;

  span{
    font-size: ${(props)=> props.higher ? '2rem' : '1.5rem'};
    color: ${(props)=> props.theme.purple};
  }
`