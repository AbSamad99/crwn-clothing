import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_fWAc4bi9eJ7BeExjmfeTavnQ00QsJNQHOo';

    const onToken=token=>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response=>{
            alert('Payment Successful')
        }).catch(error=>{
            console.log('Payment Error: ',error );
            alert('There was an issue with your payment. Please use the provided credit card.');
        })
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