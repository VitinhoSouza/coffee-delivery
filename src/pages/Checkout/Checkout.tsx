
import { useForm, FormProvider } from 'react-hook-form';
import { Form } from 'react-router-dom';

import { OrderConfirmation } from './OrderConfirmation/OrderConfirmation';
import { AddressAndPayment } from './AddressAndPayment/AddressAndPayment';

import * as S from './Checkout.styles';

export function Checkout(){

    const checkoutForm = useForm();

    const { register, handleSubmit } = checkoutForm;

    function handleCreate(e:any){
        console.log(e);
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