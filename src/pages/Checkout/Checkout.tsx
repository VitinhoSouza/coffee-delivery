
import { useForm, FormProvider } from 'react-hook-form';
import { BrowserRouter, Form, useNavigate } from 'react-router-dom';

import { OrderConfirmation } from './OrderConfirmation/OrderConfirmation';
import { AddressAndPayment } from './AddressAndPayment/AddressAndPayment';

import * as S from './Checkout.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Checkout(){

    const checkoutForm = useForm();
    const navigate = useNavigate();

    const {clearItemsCart} = useContext(CartContext);

    const { handleSubmit } = checkoutForm;

    function handleCreate(data:any){
        if(!data.zip_code || !data.street || !data.number || !data.district || !data.city || !data.state){
            alert("Preencha os campos de necessários de endereço: CEP, Rua, Número, Cidade e UF.");
        } else if(!data.payment){
            alert("Preencha a forma de pagamento.");
        } else {
            localStorage.setItem("@coffee-delivery:address", JSON.stringify(data));
            clearItemsCart();
            navigate("/success");
        }
    }


    return(
        <S.CheckoutContainer onSubmit={handleSubmit(handleCreate)}>
            <FormProvider {...checkoutForm}>
                <AddressAndPayment/>
            </FormProvider>
            <OrderConfirmation/>
        </S.CheckoutContainer>
    )
}