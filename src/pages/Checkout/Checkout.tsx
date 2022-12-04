import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Icons } from "../../components/Icons/Icons";
import { CheckoutStyle } from "./CheckoutStyle";
import LogoUpi from "../../assets/img/UPI-Logo-vector 1.svg";
import LogoCard from "../../assets/img/Cred-Logo-vector.jpg";
import LogoApple from "../../assets/img/Apple-pay-vector.svg";
import LogoAmazon from "../../assets/img/Amazon-pay-vector.svg";
import LogoGoogle from "../../assets/img/Google-pay-vector.svg";
import LogoPhonePe from "../../assets/img/PhonePe-Logo.wine 1.svg";
import LogoPaytm from "../../assets/img/Paytm_Logo_(standalone) 1.svg";
import { Link } from "react-router-dom";

export function Checkout() {
  const [show, setShow] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);
  return (
    <CheckoutStyle>
      <Header />
      <h1>Checkout</h1>
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
                />
                <input
                  className="inputEnterNumber"
                  placeholder="Enter Number"
                  type="text"
                  name="Number"
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
              />
            </label>

            <label>
              State{" "}
              <input
                className="inputEnterState"
                placeholder="Enter State"
                type="text"
                name="State"
              />
            </label>

            <label>
              City
              <input
                className="inputEnterCity"
                placeholder="Enter City"
                type="text"
                name="City"
              />
            </label>

            <label>
              Pin Code{" "}
              <input
                className="inputEnterPinCode"
                placeholder="Enter Pin Code"
                type="text"
                name="PinCode"
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
                />{" "}
                <div className="containerLogo">
                  <img src={LogoUpi} /> UPI
                </div>
              </div>

              <div className="cardMthod">
                <input type="radio" name="selectMthod" />
                <div className="containerLogo">
                  {" "}
                  <img src={LogoCard} /> Credit/Debit Card
                </div>
              </div>

              <div className="applePayMthod">
                <input type="radio" name="selectMthod" />{" "}
                <div className="containerLogo">
                  {" "}
                  <img src={LogoApple} /> Apple Pay
                </div>
              </div>

              <div className="amazonPayMthod">
                <input type="radio" name="selectMthod" />
                <div className="containerLogo">
                  {" "}
                  <img src={LogoAmazon} /> Amazon Pay
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
                <input type="radio" name="selectMthod" />{" "}
              </div>

              <div className="PhonePePayMthod">
                <div className="containerLogoSecondary">
                  {" "}
                  <div className="imageLogo">
                    <img src={LogoPhonePe} />
                  </div>
                  Phone Pe
                </div>
                <input type="radio" name="selectMthod" />{" "}
              </div>

              <div className="PaytmMthod">
                <div className="containerLogoSecondary">
                  {" "}
                  <div className="imageLogo">
                    <img src={LogoPaytm} />
                  </div>
                  Paytm
                </div>
                <input type="radio" name="selectMthod" />{" "}
              </div>
            </div>
          </form>
        )}
        <div className="actionForm">
        <Link to="/MyCarts">Back to Cart</Link>
        <button type="submit" className="buttonSubmitForm">Next</button>
        </div>
      </div>
      <Footer />
    </CheckoutStyle>
  );
}
