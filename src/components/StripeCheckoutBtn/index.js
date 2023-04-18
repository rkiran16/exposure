/* eslint-disable no-undef */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../images/exposure.png';

const StripeCheckoutBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51MYCpZDQ1qUYIFWLf1g93kzFAL7PeCITipuJgpBFdnmDZSjSvjtHSWyJ8XL5GyM186PapGBGlHk9qganNDfF0TtS00wH7j7RjE';

  const onToken = (token) => {
    console.log(token);

    var modal;
    var myModalEl = document.querySelector('#orderConfirmationModal');
    if (myModalEl) {
      modal = bootstrap.Modal.getOrCreateInstance(myModalEl); // Returns a Bootstrap modal instance
    }

    modal.show();
  };

  return (
    <StripeCheckout
      label="Make Payment"
      name="Exposure"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Make Payment"
      token={onToken}
      stripeKey={publishableKey}
    >
      <button className="btn btn-warning mb-4 w-100">
        Make Payment
      </button>
    </StripeCheckout>
  );
};

export default StripeCheckoutBtn;
