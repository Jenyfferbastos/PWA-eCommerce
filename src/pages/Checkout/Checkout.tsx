import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Icons } from "../../components/Icons/Icons";
import { CheckoutStyle } from "./CheckoutStyle";

export function Checkout() {
  const [show, setShow] = useState(false);
  const [showSecondary,  setShowSecondary] = useState(false);
  return (
    <CheckoutStyle>
      <Header />
      <h1>Checkout</h1>
      <div className="addressContainer">
        <button className="selectAddress" onClick={() => setShow(!show)}>
          Add New Address <Icons icon="ChevronBottom" />
        </button>
        {show && (
          <form>
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
      <button className="selectPayments" onClick={() => setShowSecondary(!showSecondary)}>
      Select Payment Method <Icons icon="ChevronBottom" />
      </button>
      </div>
      {showSecondary && 
      <h1>teste</h1>      
      }
      <Footer />
    </CheckoutStyle>
  );
}
