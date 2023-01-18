import logoCoffee from '../../assets/logo-coffee.png';
import location from '../../assets/location.png';

import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';

import * as S from './Navbar.styles';
import { NavLink } from 'react-router-dom';

export function Navbar(){

    return(
        <S.NavbarContainer>
            <S.NavbarContent>
                <NavLink to="/">
                    <img src={logoCoffee} alt="Copo de café" />
                </NavLink>
                <S.ActionsContainer>
                    <img src={location} alt="Local de atendimento - Quixadá, CE" />
                    <ShoppingCartButton/>
                </S.ActionsContainer>
            </S.NavbarContent>
        </S.NavbarContainer>
    )
}