import { useTheme } from "styled-components";
import { ShoppingCart } from "phosphor-react";

import * as S from "./ShoppingCartButton.styles";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { NavLink } from "react-router-dom";

export function ShoppingCartButton() {
  const theme = useTheme();
  const { selectedsProducts } = useContext(CartContext);

  return (
    <NavLink to="/checkout">
      <S.ShoppingCartButtonContainer>
        {selectedsProducts.length > 0 && (
          <S.CountItemsContainer>
            {selectedsProducts.length}
          </S.CountItemsContainer>
        )}
        <ShoppingCart size={22} color={theme["yellow-dark"]} />
      </S.ShoppingCartButtonContainer>
    </NavLink>
  );
}
