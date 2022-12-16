import { useEffect, useState } from "react";
import { userCartContext } from "../../context/useCartContext";
import { OrderSummaryStyle } from "./OrderSummaryStyle";

export interface OrderSummaryProps {
  title: string;
}

export function OrderSummary({ title }: OrderSummaryProps) {
  const { cart } = userCartContext();
  const [cartSubTotal, setSubTotal] = useState(0);
  const [discounts, setDiscounts] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(cart);
    setSubTotal(
      cart.reduce((accumulator, product) => {
        return accumulator + product.pricingBefore;
      }, 0)
    );
  });

  useEffect(() =>
    setDiscounts(
      cartSubTotal -
        cart.reduce((accumulator, product) => {
          return accumulator + product.pricingAfter;
        }, 0)
    )
  );

  useEffect(() => {
    const newTotal = cartSubTotal - discounts + 2;
    setTotal(newTotal);
  });

  return (
    <OrderSummaryStyle>
      <h2>{title}</h2>
      <div className="containerMain">
        <div className="containerText">
          <p className="text">Sub Total</p>
          <p className="text">Discount</p>
          <p className="text">Delivery Fee</p>
          <p className="textLarge">Grand Total</p>
        </div>
        <div className="containerPrice">
          <p className="text">${cartSubTotal + 2}</p>
          <p className="text">-${Number(discounts).toFixed(2)}</p>
          <p className="text">-$0.00</p>
          <p className="textLarge">${total.toFixed(2)}</p>
        </div>
      </div>
    </OrderSummaryStyle>
  );
}
