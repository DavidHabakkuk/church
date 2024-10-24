// lib/stripe.ts
import { Stripe, loadStripe } from '@stripe/stripe-js';

// Define the type of stripePromise, which can be null or a Stripe object
let stripePromise: Promise<Stripe | null>;

// This function loads the Stripe object with the publishable key from the environment variables
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
  }
  return stripePromise;
};

export default getStripe;
