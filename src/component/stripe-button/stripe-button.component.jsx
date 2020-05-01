import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {         /* takes in price */
    const priceForStripe = price*100;           /* stripe wants price in cents so this converts it to cents */
    const publishableKey = 'pk_test_qgEipA8XLCPFSnw5w4noJxz7006dAVwEYm';

    const onToken= token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN CLOTHING'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
            />
    )

}

export default StripeCheckoutButton;