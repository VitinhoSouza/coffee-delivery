import {ShoppingCart, Timer, Coffee, Package} from 'phosphor-react';

import banner from '../../assets/banner.png';
import { CoffeeList } from './CoffeeListContainer/CoffeeList';

import * as S from './Home.styles';

export function Home(){

    return(
        <S.HomeContainer>
            <S.HomeIntro>
                <S.HomeInfo>
                    <S.Title>
                        <p>Encontre o café perfeito para qualquer hora do dia</p>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    </S.Title>

                    <S.ItemsContainer>
                        <S.Item>
                            <S.ButtonContainer typeColor='safetyBuy'>
                                <ShoppingCart size={16}/>
                            </S.ButtonContainer>
                            <span>Compra simples e segura</span>
                        </S.Item>

                        <S.Item>
                            <S.ButtonContainer typeColor='packing'>
                                <Package size={16}/>
                            </S.ButtonContainer>
                            <span>Embalagem mantém o café intacto</span>
                        </S.Item>

                        <S.Item>
                            <S.ButtonContainer typeColor='fastDelivert'>
                                <Timer size={16}/>
                            </S.ButtonContainer>
                            <span>Entrega rápida e rastreada</span>
                        </S.Item>

                        <S.Item>
                            <S.ButtonContainer typeColor='freshCoffee'>
                                <Coffee size={16}/>
                            </S.ButtonContainer>
                            <span>O café chega fresquinho até você</span>
                        </S.Item>
                    </S.ItemsContainer>
                </S.HomeInfo>

                <img src={banner} alt="Copo de café com sementes por volta" />
            </S.HomeIntro>
            
            <CoffeeList/>
        </S.HomeContainer>
    )
}