
import { CoffeeCard } from './CoffeeCard/CoffeeCard';
import * as S from './CoffeeList.styles';

export function CoffeeList(){

    return(
        <S.CoffeeListContainer>
            <p>Nossos cafés</p>

            <S.CoffeeList> 
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
            </S.CoffeeList>
        </S.CoffeeListContainer>
    )
}