import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { useTheme } from "styled-components";
// import coffee from '../../../assets/coffee.png'
import { CountSelect } from "../../../components/CountSelect/CountSelect";
import { CartContext } from "../../../contexts/CartContext";

import * as S from "./OrderConfirmation.styles";

export function OrderConfirmation() {
  const theme = useTheme();

  const {
    updateItemCart,
    removeItemToCart,
    selectedsProducts,
    coffeeProducts,
  } = useContext(CartContext);

  function updateQuantity(id: string, quantity: number) {
    const thisProductAreInCart = selectedsProducts.find(
      (product) => product.idCoffee === id
    );
    if (thisProductAreInCart && quantity > 0) {
        updateItemCart(id, quantity);
    }
  }

  const idSelecteds = selectedsProducts.map((product) => product.idCoffee);

  const fullItemsInCart = coffeeProducts
    .map((coffee) => {
      if (idSelecteds.includes(coffee.id))
        return {
            ...coffee,
            quantity: selectedsProducts.find(product => product.idCoffee === coffee.id)?.quantity
        };
    })
    .filter((results) => results !== undefined);

    let totalQuantity =  0;
    fullItemsInCart.map(item => {
        totalQuantity += item?.quantity || 0;
    } )

  return (
    <S.OrderConfirmationContainer>
      <p>Cafés selecionados</p>

      <S.ProductsAndValuesCard>
        {fullItemsInCart.map(product => (
          <S.ProductCard key={product?.id}>
            <img src={product?.imgSrc} alt="Xícara com café vista de cima" />

            <div className="description">
              <div className="informations">
                <p>{product?.name}</p>
                <span>R$ {String(( (product?.quantity || 0) * 9.90).toFixed(2)).replace('.',',')}</span>
              </div>

              <div className="actions">
                <CountSelect
                    value={product?.quantity || 0}
                    increase={()=>updateQuantity(product?.id || '0', (product?.quantity || 0 ) + 1)}
                    decrease={()=>updateQuantity(product?.id || '0', (product?.quantity || 0 ) - 1)}
                />
                <S.RemoveButton onClick={()=>removeItemToCart(product?.id || '0')}>
                  <Trash color={theme.purple} size={18} />
                  remover
                </S.RemoveButton>
              </div>
            </div>
          </S.ProductCard>
        ))}

        <S.TotalValueContainer>
          <S.DescriptionValue>
            <span>Total de itens</span>
            <p>R$ {String( (totalQuantity * 9.90).toFixed(2)).replace('.',',')}</p>
          </S.DescriptionValue>

          <S.DescriptionValue>
            <span>Entrega</span>
            <p>R$ 3,50</p>
          </S.DescriptionValue>

          <S.DescriptionValue bold>
            <span>Total</span>
            <p>R$ {String(((totalQuantity * 9.90) + (3.50)).toFixed(2)).replace('.',',')}</p>
          </S.DescriptionValue>

          <S.ConfirmationButton type="submit">
            Confirmar pedido
          </S.ConfirmationButton>
        </S.TotalValueContainer>
      </S.ProductsAndValuesCard>
    </S.OrderConfirmationContainer>
  );
}
