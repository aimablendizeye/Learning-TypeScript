
// Question 1 

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function updateField<T>(
            entity: T,
            key: keyof T,
            value: T[keyof T]
              ): T {
               return {
              ...entity,
              [key]: value
               };
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true
};

const updated = updateField(user, "name", 100);

console.log(updated);




// Question 2 


type PaymentResult =
  | { status: "success"; transactionId: string; amount: number }
  | { status: "failed"; error: string }
  | { status: "pending"; retryAfter: number }
  | { status: "refunded"; refundId: string; amount: number };

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
}

function handlePayment(result: PaymentResult): string {
  switch (result.status) {
    case "success":
      return `Paid: ${result.amount}`;
    case "failed":
      return result.error.toUpperCase();
    case "pending":
      return `Pending, retry after ${result.retryAfter}`;
    case "refunded":
      return `Refunded ${result.amount} (${result.refundId})`;
    default:
      return assertNever(result);
  }
}

function getPaymentValue(result: PaymentResult): number {
  switch (result.status) {
    case "success":
      return result.amount;
    case "refunded":
      return -result.amount; // design choice: refunds reduce value
    case "failed":
    case "pending":
      return 0;
    default:
      return assertNever(result);
  }
}

function processPayment(result: PaymentResult): string {
  switch (result.status) {
    case "success":
      return result.transactionId;
    case "failed":
      return result.error;
    case "pending":
      return `retry:${result.retryAfter}`;
    case "refunded":
      return result.refundId;
    default:
      return assertNever(result);
  }
}