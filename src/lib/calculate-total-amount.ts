export interface IOrder {
  calculateTotal(): number;
}

export function calculateTotalAmount(order: IOrder) {
  let total = order.calculateTotal();
  const discount = .1 * total;
  total -= discount;
  const tax = .2 * total;
  total += tax;

  return total;
}