import { useTheme } from "styled-components";
import { useFormContext } from "react-hook-form";

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";

import * as S from "./AddressAndPayment.styles";
import { useState } from "react";

export function AddressAndPayment() {
  const theme = useTheme();

  const { register } = useFormContext();

  const [cep, setCep] = useState("");

  function updateCep(value:string){
    if(!isNaN(Number(value))){
      setCep(value);
    }
  }

  return (
    <S.AddressAndPaymentContainer>
      <p>Complete seu pedido</p>

      <S.AddressContainer>
        <S.Description>
          <MapPinLine size={22} color={theme["yellow-dark"]} />
          <S.Text>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </S.Text>
        </S.Description>

        <S.FormInputs>
          <input
            value={cep}
            type="text"
            placeholder="CEP"
            {...register("zip_code")}
            minLength={8}
            maxLength={8}
            onChange={e => updateCep(e.target.value)}
          />
          <input type="text" placeholder="Rua" {...register("street")} />
          <input type="text" placeholder="Número" {...register("number")} />
          <input
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
          <input type="text" placeholder="Bairro" {...register("district")} />
          <input type="text" placeholder="Cidade" {...register("city")} />
          <input type="text" placeholder="UF" {...register("state")} minLength={2} maxLength={2}/>
        </S.FormInputs>
      </S.AddressContainer>

      <S.PaymentContainer>
        <S.Description>
          <CurrencyDollar size={22} color={theme.purple} />
          <S.Text>
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </S.Text>
        </S.Description>

        <S.PaymentForm>
          <input
            type="radio"
            id="creditCard"
            value="creditCard"
            {...register("payment")}
          />
          <label htmlFor="creditCard">
            <CreditCard color={theme.purple} /> CARTÃO DE CRÉDITO
          </label>

          <input
            type="radio"
            id="debitCard"
            {...register("payment")}
            value="debitCard"
          />
          <label htmlFor="debitCard">
            <Bank color={theme.purple} /> CARTÃO DE DÉBITO
          </label>

          <input
            type="radio"
            id="money"
            {...register("payment")}
            value="money"
          />
          <label htmlFor="money">
            <Money color={theme.purple} />
            DINHEIRO
          </label>
        </S.PaymentForm>
      </S.PaymentContainer>
    </S.AddressAndPaymentContainer>
  );
}
