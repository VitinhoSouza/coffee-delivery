
import { Trash } from 'phosphor-react';
import { useTheme } from 'styled-components';
import coffee from '../../../assets/coffee.png'
import { CountSelect } from '../../../components/CountSelect/CountSelect';

import * as S from "./OrderConfirmation.styles";

export function OrderConfirmation(){

    const theme = useTheme();

    return(
        <S.OrderConfirmationContainer>
            <p>Cafés selecionados</p>

            <S.ProductsAndValuesCard>

                <S.ProductCard>
                    <img src={coffee} alt="Xícara com café vista de cima" />
                    
                    <div className="description">
                        <div className="informations">
                            <p>Expresso Tradicional</p>
                            <span>R$ 9,90</span>
                        </div>

                        <div className="actions">
                            <CountSelect/>
                            <S.RemoveButton>
                                <Trash color={theme.purple} size={18}/>
                                remover
                            </S.RemoveButton>
                        </div>
                    </div>
                </S.ProductCard>

                <S.ProductCard>
                    <img src={coffee} alt="Xícara com café vista de cima" />
                    
                    <div className="description">
                        <div className="informations">
                            <p>Expresso Tradicional</p>
                            <span>R$ 9,90</span>
                        </div>

                        <div className="actions">
                            <CountSelect/>
                            <S.RemoveButton>
                                <Trash color={theme.purple} size={18}/>
                                remover
                            </S.RemoveButton>
                        </div>
                    </div>
                </S.ProductCard>

                <S.TotalValueContainer>
                    <S.DescriptionValue>
                        <span>Total de itens</span>
                        <p>R$ 29,70</p>
                    </S.DescriptionValue>

                    <S.DescriptionValue>
                        <span>Entrega</span>
                        <p>R$ 3,50</p>
                    </S.DescriptionValue>

                    <S.DescriptionValue bold>
                        <span>Total</span>
                        <p>R$ 33,20</p>
                    </S.DescriptionValue>

                    <S.ConfirmationButton type="submit">
                        Confirmar pedido
                    </S.ConfirmationButton>
                </S.TotalValueContainer>
            </S.ProductsAndValuesCard>
        </S.OrderConfirmationContainer>
    )
}