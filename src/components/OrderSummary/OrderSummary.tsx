import { OrderSummaryStyle } from "./OrderSummaryStyle";

export interface OrderSummaryProps{
  title: string,
}

export function OrderSummary({title}:OrderSummaryProps) {
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
            <p className="text">$119.69</p>
            <p className="text">-$13.40</p>
            <p className="text">-$0.00</p>
            <p className="textLarge">$106.29</p>
          </div>
        </div>
      </OrderSummaryStyle>
  );
}
