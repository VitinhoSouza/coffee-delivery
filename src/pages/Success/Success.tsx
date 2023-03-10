import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import illustration from "../../assets/illustration.png";

import * as S from "./Success.styles";

export function Success() {
  const theme = useTheme();

  const data = localStorage.getItem("@coffee-delivery:address");
  const dataConverted = data ? JSON.parse(data) : {};

  return (
    <S.SuccessContainer>
      <S.MainInformations>
        <S.Message>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </S.Message>

        <S.InfoGradient>
          <S.InfoContainer>
            <S.InfoItem>
              <S.CircleItem color="purple">
                <MapPin color={theme.white} size={18} />
              </S.CircleItem>
              <S.InfoMessage>
                Entrega em{" "}
                <span>
                  {dataConverted.street}, {dataConverted.number}
                </span>{" "}
                <br />
                {dataConverted.district} - {dataConverted.city},{" "}
                {dataConverted.state}
              </S.InfoMessage>
            </S.InfoItem>

            <S.InfoItem>
              <S.CircleItem color="yellow">
                <Timer color={theme.white} size={18} />
              </S.CircleItem>
              <S.InfoMessage>
                Previsão de entrega <br />
                <span>20 min - 30 min</span>
              </S.InfoMessage>
            </S.InfoItem>

            <S.InfoItem>
              <S.CircleItem color="yellow-dark">
                <CurrencyDollar color={theme.white} size={18} />
              </S.CircleItem>
              <S.InfoMessage>
                Pagamento na entrega <br />
                <span>
                  {dataConverted.payment === "creditCart"
                    ? "Cartão de crédito"
                    : dataConverted.payment === "creditCart"
                    ? "Cartão de débito"
                    : "Dinheiro"}
                </span>
              </S.InfoMessage>
            </S.InfoItem>
          </S.InfoContainer>
        </S.InfoGradient>
      </S.MainInformations>

      <img
        src={illustration}
        alt="Imagem de um homem pilotando uma moto com entregas"
      />
    </S.SuccessContainer>
  );
}
