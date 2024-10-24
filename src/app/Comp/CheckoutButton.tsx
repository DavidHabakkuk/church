import React from 'react';
import getStripe from '../lib/stripe';

const CheckoutButton: React.FC = () => {
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        console.error('Stripe checkout error:', error);
      }
    }
  };

  return (
    <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">
      Pay & Download
    </button>
  );
};

export default CheckoutButton;
