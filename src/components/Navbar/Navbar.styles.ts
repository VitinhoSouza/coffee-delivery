import styled from 'styled-components'

export const NavbarContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 2;
    background-color: ${(props)=> props.theme.background};

    width: 100%;
    height: 6.5rem;

    @media (max-width: 330px) {
        height: 8rem;
    }
`;

export const NavbarContent = styled.div`
    height: 100%;
    width: 85%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    >img{
        max-height: 2.5rem;
    }

    @media (max-width: 330px) {
        flex-direction: column;
        >img{
            margin-top: 1rem;
        }
    }

`

export const ActionsContainer = styled.nav`
    width: 170px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`