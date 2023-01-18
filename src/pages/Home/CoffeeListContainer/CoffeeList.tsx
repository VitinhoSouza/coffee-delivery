
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { CoffeeCard } from './CoffeeCard/CoffeeCard';

import * as S from './CoffeeList.styles';

export function CoffeeList(){

    const { coffeeProducts } = useContext(CartContext);

    return(
        <S.CoffeeListContainer>
            <p>Nossos cafés</p>

            <S.CoffeeList> 
                {coffeeProducts?.map((coffee) => (
                    <CoffeeCard
                        key={coffee.id}
                        id={coffee.id}
                        description={coffee.description}
                        name={coffee.name}
                        tags={coffee.tags}
                        imgSrc={coffee.imgSrc}
                    />
                ))}
            </S.CoffeeList>
        </S.CoffeeListContainer>
    )
}