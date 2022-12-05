import { useContext, useState } from "react";
import { CartContext } from "../../context/Cart";
import { OrderSummaryStyle } from "./OrderSummaryStyle";

export interface OrderSummaryProps {
  title: string;
}

export function OrderSummary({ title }: OrderSummaryProps) {
  const { cart } = useContext(CartContext);
  const [cartSubTotal] = useState(
    cart.products.reduce((accumulator, product) => {
      return accumulator + product.pricingAfter;
    }, 0)
  );

  const [priceWithDiscount] = useState(
    cart.products.reduce((accumulator, product) => {
      return accumulator + product.pricingBefore;
    }, 0)
  );

  const [total] = useState(cartSubTotal - priceWithDiscount + 2);

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
          <p className="text">
            -${Number(cartSubTotal - priceWithDiscount).toFixed(2)}
          </p>
          <p className="text">-$0.00</p>
          <p className="textLarge">${total.toFixed(2)}</p>
        </div>
      </div>
    </OrderSummaryStyle>
  );
}
