import styled from "styled-components";

export const SuccessContainer = styled.div`
    padding-top: 10rem;
    width: 85%;
    margin: 0 auto;

    display: flex;
    align-items: flex-end;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    >img{
        max-width: 90%;
    }
`

export const MainInformations = styled.div`
    width: 40rem;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 420px) {
        width:90%;
    }

`

export const Message = styled.div`
    width: 100%;
    
    @media (max-width: 1000px) {
        text-align: center;
    }

    >h1{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        color: ${(props) => props.theme["yellow-dark"]};
    }

    >span{
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }
`

export const InfoGradient = styled.div`
    width: 80%;
    position: relative;
    background: linear-gradient(to right, ${(props) => props.theme.yellow}, ${(props) => props.theme.purple});
    border-radius: 6px 36px;
    padding: 1px;
    margin-top: 2rem;
`

export const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 6px 36px;
    padding: 2rem;

    background-color: ${(props) => props.theme.background};

    display: flex;
    flex-direction: column;
    gap: 2rem;
`
type CircleItemProps = {
    color: 'purple' | 'yellow' | 'yellow-dark'
}
export const CircleItem = styled.div<CircleItemProps>`
    background-color: ${(props) => props.theme[props.color]};
    
    width: 2rem;
    height: 2rem;
    padding: 6px;
    border-radius: 1000px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const InfoItem = styled.div`
    width: 100%;

    display: flex;
    gap: 1rem;
`

export const InfoMessage = styled.div`
    width: 100%;

    color: ${(props) => props.theme["base-text"]};

    >span{
        font-weight: 700;
    }
`



