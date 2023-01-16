import styled from "styled-components";

export const AddressAndPaymentContainer = styled.div`
  width: 56%;

  /* background-color: firebrick; */

  >p {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const AddressContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 1rem;

  background-color: ${(props) => props.theme["base-card"]};
`;

export const Description = styled.div`
  display: flex;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;

  > span {
    &:first-child {
      color: ${(props) => props.theme["base-subtitle"]};
    }
    &:last-child {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;
      margin-top: 0.3rem;
    }
  }
`;

export const FormInputs = styled.div`
  margin-top: 2rem;

  input {
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-label"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;

    height: 2.625rem;
    width: 12.5rem;
    min-width: 12.5rem;
    padding-left: 0.5rem;

    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

    & + input {
      margin-top: 1rem;
    }

    &:nth-child(1),
    &:nth-child(2) {
      display: block;
    }

    &:nth-child(2) {
      width: 100%;
    }

    &:nth-child(4) {
      width: 23rem;

      @media (max-width: 600px) {
        width: 80%;
      }
    }

    &:nth-child(4):before {
      content: '🎮';
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(5) {
      & + input {
        margin-right: 0.5rem;
      }
    }

    &:nth-child(6) {
      width: 19.5rem;
      @media (max-width: 600px) {
        width: 12rem;
      }
    }

    &:last-child {
      width: 3rem;
      min-width: 3rem;
    }
  }
`;

export const PaymentContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 2rem;

  background-color: ${(props) => props.theme["base-card"]};
`;

export const PaymentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.25rem;
  }

  gap: 0.75rem;
  margin-top: 1rem;

  input {
    opacity: 0;
    width: 0;
  }

  label {
    display: flex;
    align-items: center;
    align-content: center;
    cursor: pointer;

    gap: 0.5rem;

    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};

    padding: 1rem;
    border-radius: 4px;

    font-size: 0.75rem;
    width: 11.16rem;
    height: 3.18rem;
    
    svg {
      width: 1rem;
      height: 1rem;
    }
    
  }

  input[type="radio"]:checked + label {
    border: 1px solid ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["purple-light"]};
  }
  
  label:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
