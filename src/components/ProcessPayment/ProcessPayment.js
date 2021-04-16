import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SplitCardForm from './SimpleCardForm';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeI49FdSNPD3WemNlAQETRS7dHio9ByepsoXwm2MTkjMXp8f4ijtUfUtirShc8ABS2GATptvaTYHpKysDVCoMKl00zTSPEQC6');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;