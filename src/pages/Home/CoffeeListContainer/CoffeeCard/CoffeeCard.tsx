import {ShoppingCart} from 'phosphor-react';
import { useTheme } from 'styled-components';

import coffee from '../../../../assets/coffee.png'
import { CountSelect } from '../../../../components/CountSelect/CountSelect';

import * as S from './CoffeeCard.styles';

export function CoffeeCard(){

    const theme = useTheme();

    return(
        <S.CoffeeCardContainer>
            <img src={coffee} alt="Xícara com café vista de cima" />
            <S.CardInfo>
                <S.TagContainer>
                    <S.Tag>tradicional</S.Tag>
                    <S.Tag>gelado</S.Tag>
                </S.TagContainer>
                <p>Expresso Tradicional</p>
                <span>O tradicional café feito com água quente e grãos moídos</span>
                <S.CountContainer>
                    <S.ValueContainer>
                        R$ <span>9,90</span>
                    </S.ValueContainer>

                    <CountSelect/>
                    
                    <S.ButtonContainer>
                        <ShoppingCart size={22} color={theme.white}/>
                    </S.ButtonContainer>
                </S.CountContainer>
            </S.CardInfo>
        </S.CoffeeCardContainer>
    )
}