
import {ShoppingCart} from 'phosphor-react';

import * as S from './ShoppingCartButton.styles';

export function ShoppingCartButton(){

    return(
        <S.ShoppingCartButtonContainer>
            <S.CountItemsContainer>
                3
            </S.CountItemsContainer>
            <ShoppingCart size={22}/>
        </S.ShoppingCartButtonContainer>
    )
}