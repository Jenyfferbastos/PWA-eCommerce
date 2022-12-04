import { Products } from "../../components/Products/Products";
import imageBag2 from "../../assets/img/image-bag-2.png";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { MyCartsStyle } from "./MyCartsStyle";
import { Cupom } from "../../components/Cupom/Cupom";
import { CodeCheck } from "../../components/CodeCheck/CodeCheck";
import { useState } from "react";
import { Icons } from "../../components/Icons/Icons";
import { OrderSummaryStyle } from "../../components/OrderSummary/OrderSummaryStyle";
import { ButtonTrueBack } from "../../components/ButtonsAndChips/ButtonsAndChipsSmall/ButtonTrueBack";
import { Link } from "react-router-dom";
import { ButtonFalseBack } from "../../components/ButtonsAndChips/ButtonsAndChipsSmall/ButtonFalseBack";

export function MyCarts() {
  const [show, setShow] = useState(false);
  return (
    <MyCartsStyle>
      <Header />
      <h1 className="titleMyCarts">My Cart</h1>
      <div className="contentProduct">
        <p>Product Name</p>
        <div className="informationPriceProduct">
          <p>Price</p>
          <p>Qty</p>
          <p>Subtotal</p>
        </div>
      </div>
      <div className="cartContainer">
        <div>
          <Products
            image={imageBag2}
            nameProduct={"Coach"}
            descriptionProduct={"Leather Coach Bag"}
            quantityProduct={"Qty- 1"}
            priceProduct={"$54.69"}
            quantityProductNumber={"1"}
            subtotalProduct={"$54.69"}
          />

          <Products
            image={imageBag2}
            nameProduct={"Coach"}
            descriptionProduct={"Leather Coach Bag"}
            quantityProduct={"Qty- 1"}
            priceProduct={"$54.69"}
            quantityProductNumber={"1"}
            subtotalProduct={"$54.69"}
          />
        </div>
        <div className="containerOrderSummary">
            <OrderSummary />
            <div className="buttons">
              <Link to="/Checkout">
                <ButtonTrueBack name={"Place Order"} icon={""} />
              </Link>
              <ButtonFalseBack name={"Continue Shopping"} icon={""} />
            </div>
        </div>
      </div>
      <div className="couponCode">
        <button className="selectCoupon" onClick={() => setShow(!show)}>
          Apply Coupon Code <Icons icon="ChevronBottom" />
        </button>
        {show && <CodeCheck placeholder={"Apply Coupon Code"} />}
      </div>
      <Footer />
    </MyCartsStyle>
  );
}
