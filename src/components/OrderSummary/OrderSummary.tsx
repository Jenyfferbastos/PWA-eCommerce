import { Link } from "react-router-dom";
import { ButtonFalseBack } from "../ButtonsAndChips/ButtonsAndChipsSmall/ButtonFalseBack";
import { ButtonTrueBack } from "../ButtonsAndChips/ButtonsAndChipsSmall/ButtonTrueBack";
import { OrderSummaryStyle } from "./OrderSummaryStyle";

export function OrderSummary() {
  return (
    <OrderSummaryStyle>
      <h2>Order Summary</h2>
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
      <div className="buttons">
      <Link to='/Checkout'><ButtonTrueBack name={"Place Order"} icon={""} /></Link>
      <ButtonFalseBack name={"Continue Shopping"} icon={""} />
      </div>
    </OrderSummaryStyle>
  );
}
