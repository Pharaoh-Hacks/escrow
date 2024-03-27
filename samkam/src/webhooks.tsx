import React from 'react';
import escrow from 'escrow' // Assuming you have a TypeScript definition for the escrow module

interface PaymentProps {
  amount: number;
  seller: string;
  buyer: string;
}

const Payment: React.FC<PaymentProps> = ({ amount, seller, buyer }) => {
  const processPayment = () => {
    // Create a new escrow transaction
    escrow.createTransaction(amount, seller, buyer);
    // Simulate payment completion
    escrow.completeTransaction(amount, seller, buyer);
    alert('Payment processed successfully with escrow');
  };

  return (
    <div>
      <h2>Payment Process</h2>
      <p>Amount: ${amount}</p>
      <p>Seller: {seller}</p>
      <p>Buyer: {buyer}</p>
      <button onClick={processPayment}>Process Payment</button>
    </div>
  );
};

export default Payment;
