import { useTheme } from 'styled-components';
import {ShoppingCart} from 'phosphor-react';

import * as S from './ShoppingCartButton.styles';

export function ShoppingCartButton(){

    const theme = useTheme();

    return(
        <S.ShoppingCartButtonContainer>
            <S.CountItemsContainer>
                3
            </S.CountItemsContainer>
            <ShoppingCart size={22} color={theme['yellow-dark']}/>
        </S.ShoppingCartButtonContainer>
    )
}