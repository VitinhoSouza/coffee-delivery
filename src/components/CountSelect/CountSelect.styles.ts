import styled from 'styled-components'

export const CountSelectContainer = styled.div`
    height: 2.5rem;
    width: 4.5rem;

    background-color: ${(props)=> props.theme['base-button']};
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.5rem;

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

  >span{
    font-size: ${(props)=> props.higher ? '1.8rem' : '1.2rem'};
    color: ${(props)=> props.theme.purple};

    &:hover{
      color: ${(props)=> props.theme['purple-dark']};
    }
  }
`