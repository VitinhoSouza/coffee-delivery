import styled from "styled-components";

export const OrderConfirmationContainer = styled.div`
  width: 45%;

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  > p {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`;

export const ProductsAndValuesCard = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  width: 100%;
  padding: 2rem;
`;

export const ProductCard = styled.div`
  width: 100%;
  gap: 1rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  display: flex;
  align-items: center;

  > img {
    max-width: 4rem;
    max-height: 4rem;
  }

  .description {
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .informations {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > p {
        color: ${(props) => props.theme["base-subtitle"]}
      }

      > span {
        color: ${(props) => props.theme["base-text"]};
        font-weight: 700;
      }
    }

    .actions {
      display: flex;
      gap: 1rem;

      @media (max-width: 300px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export const RemoveButton = styled.button`
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 4px 8px;
  gap: 4px;
  border-radius: 6px;
  font-size: 0.75rem;

  width: 6rem;
  height: 2.5rem;

  &:hover{
    background-color: ${(props) => props.theme["base-hover"]};
  }
`

export const TotalValueContainer = styled.div`
  width: 100%;
`;

type DescriptionValueProps = {
  bold?: boolean;
};

export const DescriptionValue = styled.div<DescriptionValueProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 2rem;

  > span {
    font-size: ${(props) => (props.bold ? "1.25rem" : "0.875rem")};
    color: ${(props) =>
      props.bold ? props.theme["base-subtitle"] : props.theme["base-text"]};

    font-weight: ${(props) => (props.bold ? "700" : "400")};
  }

  > p {
    font-size: ${(props) => (props.bold ? "1.25rem" : "1rem")};
    color: ${(props) =>
      props.bold ? props.theme["base-subtitle"] : props.theme["base-text"]};
    font-weight: ${(props) => (props.bold ? "700" : "400")};
  }
`;

export const ConfirmationButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  padding: 12px 8px;
  border-radius: 6px;
  margin-top: 1rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
