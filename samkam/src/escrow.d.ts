declare module 'escrow' {
  interface EscrowTransaction {
    amount: number;
    seller: string;
    buyer: string;
    // Add more properties as needed
  }

  function createTransaction(amount: number, seller: string, buyer: string): void;
    function isTransactionPaid(orderId: string): boolean;
     function completeTransaction(amount: number, seller: string, buyer: string): void;
  
  // Add more function declarations as needed
}
