import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_n8wzg1wDyr2Q0ZTBRYYZD32L00bNec4rPb';

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            image='https://sendeyo.com/up/d/f3eb2117da'
            name='CRWN Clothing Ltd'
            amount={priceForStripe}
            description={`Your Total is $${price}`}
            billingAddress
            shippingAddress
            label='Pay Now'
            stripeKey={publishableKey}
            panelLabel='Pay Now'
            token={onToken}
        />
    )
}

export default StripeCheckoutButton;