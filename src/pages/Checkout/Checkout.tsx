import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Icons } from "../../components/Icons/Icons";
import { CheckoutStyle, OrderSummaryProducts } from "./CheckoutStyle";
import LogoUpi from "../../assets/img/UPI-Logo-vector 1.svg";
import LogoCard from "../../assets/img/Cred-Logo-vector.jpg";
import LogoApple from "../../assets/img/Apple-pay-vector.svg";
import LogoAmazon from "../../assets/img/Amazon-pay-vector.svg";
import LogoGoogle from "../../assets/img/Google-pay-vector.svg";
import LogoPhonePe from "../../assets/img/PhonePe-Logo.wine 1.svg";
import LogoPaytm from "../../assets/img/Paytm_Logo_(standalone) 1.svg";
import { Link } from "react-router-dom";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import ImageBag2 from "../../assets/img/image-bag-2.png";
import { UserAddress } from "../../interfaces/UserAddress";
import { createOrder } from "../../services/createOrder";
import { Order } from "../../interfaces/Order";
import { userCartContext } from "../../context/useCartContext";

export function Checkout() {
  const [show, setShow] = useState(false);
  const { cart, setCart } = userCartContext();
  const [userAddress, setUserAddress] = useState<UserAddress>();
  const [orderValue] = useState(
    cart
      .reduce((accumulator, product) => {
        return accumulator + product.pricingBefore;
      }, 0)
      .toFixed(2)
  );
  const [orderData, setOrderData] = useState<Order>({
    products: cart,
    orderValue,
    quantity: 1,
  });
  const [showSecondary, setShowSecondary] = useState(false);

  const handleUserDataChange = ({
    city,
    name,
    phone,
    postalCode,
    state,
    street,
    phoneArea,
  }: Partial<UserAddress>) => {
    setUserAddress({
      ...userAddress,
      city,
      name,
      phone,
      postalCode,
      state,
      street,
      phoneArea,
    });
  };

  const handlePaymentChange = (paymentMethod: string) => {
    setOrderData({ ...orderData, paymentMethod });
  };

  const handleCreateOrder = async (orderPayload: Order) => {
    await createOrder(orderPayload);
  };

  const handleSubmit = () => {
    handleCreateOrder({ ...orderData, userAddress });
    setCart([]);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <p>Order created successfully!</p>,
    });
  };

  return (
    <CheckoutStyle>
      <Header />
      <h1>Checkout</h1>
      <div className="containerCheckout">
        <div className="checkoutForm">
          <div className="addressContainer">
            <button className="selectAddress" onClick={() => setShow(!show)}>
              Add New Address <Icons icon="ChevronBottom" />
            </button>
            {show && (
              <form className="formAddress">
                <label>
                  Full Name{" "}
                  <input
                    className="inputEnterName"
                    placeholder="Enter Name"
                    type="text"
                    name="Name"
                    onChange={(e) =>
                      handleUserDataChange({
                        ...userAddress,
                        name: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Mobile Number{" "}
                  <div className="containerNumber">
                    <input
                      className="inputEnterNumberArea"
                      placeholder="+11"
                      type="text"
                      name="Number"
                      onChange={(e) =>
                        handleUserDataChange({
                          ...userAddress,
                          phoneArea: e.target.value,
                        })
                      }
                    />
                    <input
                      className="inputEnterNumber"
                      placeholder="Enter Number"
                      type="text"
                      name="Number"
                      onChange={(e) =>
                        handleUserDataChange({
                          ...userAddress,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </label>

                <label>
                  Street Address
                  <input
                    className="inputEnterAddress"
                    placeholder="Enter Address"
                    type="text"
                    name="Address"
                    onChange={(e) =>
                      handleUserDataChange({
                        ...userAddress,
                        street: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  State{" "}
                  <input
                    className="inputEnterState"
                    placeholder="Enter State"
                    type="text"
                    name="State"
                    onChange={(e) =>
                      handleUserDataChange({
                        ...userAddress,
                        state: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  City
                  <input
                    className="inputEnterCity"
                    placeholder="Enter City"
                    type="text"
                    name="City"
                    onChange={(e) =>
                      handleUserDataChange({
                        ...userAddress,
                        city: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  Pin Code{" "}
                  <input
                    className="inputEnterPinCode"
                    placeholder="Enter Pin Code"
                    type="text"
                    name="PinCode"
                    onChange={(e) =>
                      handleUserDataChange({
                        ...userAddress,
                        postalCode: e.target.value,
                      })
                    }
                  />
                </label>
              </form>
            )}
          </div>
          <div className="paymentsContainer">
            <button
              className="selectPayments"
              onClick={() => setShowSecondary(!showSecondary)}
            >
              Select Payment Method <Icons icon="ChevronBottom" />
            </button>

            {showSecondary && (
              <form className="formPayment">
                <div className="paymentMthods">
                  <div className="upiMthod">
                    <input
                      className="inputUpiMthod"
                      type="radio"
                      name="selectMthod"
                      onChange={() => handlePaymentChange("UPI")}
                    />{" "}
                    <div className="containerLogo">
                      <img className="image" src={LogoUpi} /> UPI
                    </div>
                  </div>

                  <div className="cardMthod">
                    <input
                      type="radio"
                      name="selectMthod"
                      onChange={() => handlePaymentChange("Credit/Debit")}
                    />
                    <div className="containerLogo">
                      {" "}
                      <img className="imageCard" src={LogoCard} /> Credit/Debit
                      Card
                    </div>
                  </div>

                  <div className="applePayMthod">
                    <input
                      type="radio"
                      name="selectMthod"
                      onChange={() => handlePaymentChange("Apple Pay")}
                    />{" "}
                    <div className="containerLogo">
                      {" "}
                      <img className="image" src={LogoApple} /> Apple Pay
                    </div>
                  </div>

                  <div className="amazonPayMthod">
                    <input
                      type="radio"
                      name="selectMthod"
                      onChange={() => handlePaymentChange("Amazon Pay")}
                    />
                    <div className="containerLogo">
                      {" "}
                      <img className="image" src={LogoAmazon} /> Amazon Pay
                    </div>
                  </div>
                </div>

                <div className="paymentMthodsSecondary">
                  <div className="googlePayMthod">
                    <div className="containerLogoSecondary">
                      {" "}
                      <div className="imageLogo">
                        <img src={LogoGoogle} />
                      </div>
                      Google Pay
                    </div>
                    <input
                      type="radio"
                      name="selectMthod"
                      onChange={() => handlePaymentChange("Google Pay")}
                    />{" "}
                  </div>

                  <div className="PhonePePayMthod">
                    <div className="containerLogoSecondary">
                      {" "}
                      <div className="imageLogo">
                        <img src={LogoPhonePe} />
                      </div>
                      Phone Pe
                    </div>
                    <input
                      type="radio"
                      name="selectMthod"
                      onChange={() => handlePaymentChange("Phone Pe")}
                    />{" "}
                  </div>

                  <div className="PaytmMthod">
                    <div className="containerLogoSecondary">
                      {" "}
                      <div className="imageLogo">
                        <img src={LogoPaytm} />
                      </div>
                      Paytm
                    </div>
                    <input
                      type="radio"
                      name="selectMthod"
                      onChange={() => handlePaymentChange("Paytm")}
                    />{" "}
                  </div>
                </div>
              </form>
            )}
            <div className="actionForm">
              <Link to="/MyCarts">Back to Cart</Link>
              <button
                type="submit"
                className="buttonSubmitForm"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="orderSummaryContainer">
          <h2 className="titleOrderSummary">Order Summary</h2>
          {cart.map((product) => (
            <OrderSummaryProducts>
              <div className="imageContainer">
                <img src={product.imgLink} />
              </div>
              <div className="informationProduct">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Qty- {orderData.quantity}</p>
              </div>
            </OrderSummaryProducts>
          ))}
          <OrderSummary title={"Order Details"} />
        </div>
      </div>
      <Footer />
    </CheckoutStyle>
  );
}
