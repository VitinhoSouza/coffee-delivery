import logoCoffee from '../../assets/logo-coffee.png';
import location from '../../assets/location.png';

import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';

import * as S from './Navbar.styles';

export function Navbar(){

    return(
        <S.NavbarContainer>
            <S.NavbarContent>
                <img src={logoCoffee} alt="Copo de café" />
                <S.ActionsContainer>
                    <img src={location} alt="Local de atendimento - Quixadá, CE" />
                    <ShoppingCartButton/>
                </S.ActionsContainer>
            </S.NavbarContent>
        </S.NavbarContainer>
    )
}