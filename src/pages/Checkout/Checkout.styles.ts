import styled from 'styled-components'

export const CheckoutContainer = styled.form`
    padding-top: 9rem;
    width: 85%;
    margin: 0 auto;

    display: flex;
    gap: 2rem;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }

`