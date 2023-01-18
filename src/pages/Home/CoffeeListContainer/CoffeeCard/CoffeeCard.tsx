import {ShoppingCart} from 'phosphor-react';
import { useContext, useState } from 'react';
import { useTheme } from 'styled-components';

import { CountSelect } from '../../../../components/CountSelect/CountSelect';
import { CartContext, CoffeProductProps } from '../../../../contexts/CartContext';

import * as S from './CoffeeCard.styles';

export function CoffeeCard({id, description, name, tags, imgSrc}:CoffeProductProps){

    const theme = useTheme();

    const { updateItemCart, removeItemToCart, selectedsProducts } = useContext(CartContext);
    const [actualValue, setActualValue] = useState(selectedsProducts.find(product => product.idCoffee === id)?.quantity || 0);

    function increaseQuantity(){
        setActualValue(actualValue+1);
        const thisProductAreInCart = selectedsProducts.find(product => product.idCoffee === id);
        if(thisProductAreInCart){
            updateItemCart(id, actualValue+1);
        }
    }

    function decreaseQuantity(){
        setActualValue(actualValue > 0 ? actualValue-1 : 0);

        const thisProductAreInCart = selectedsProducts.find(product => product.idCoffee === id);

        if(thisProductAreInCart && actualValue - 1 === 0){
            removeItemToCart(id);
        } else if(thisProductAreInCart){
            updateItemCart(id, actualValue-1);
        }
    }

    return(
        <S.CoffeeCardContainer>
            <img src={imgSrc} alt="Xícara com café vista de cima" />
            <S.CardInfo>
                <S.TagContainer>
                    {tags.map(tag => (
                        <S.Tag key={id+tag}>{tag}</S.Tag>
                    ))}
                </S.TagContainer>
                <p>{name}</p>
                <span>{description}</span>
                <S.CountContainer>
                    <S.ValueContainer>
                        R$ <span>{String((actualValue * 9.90).toFixed(2)).replace('.',',')}</span>
                    </S.ValueContainer>

                    <CountSelect
                        value={actualValue}
                        increase={increaseQuantity}
                        decrease={decreaseQuantity}
                    />
                    
                    <S.ButtonContainer onClick={actualValue > 0 ? ()=>updateItemCart(id,actualValue) : ()=>{}}>
                        <ShoppingCart size={22} color={theme.white}/>
                    </S.ButtonContainer>
                </S.CountContainer>
            </S.CardInfo>
        </S.CoffeeCardContainer>
    )
}