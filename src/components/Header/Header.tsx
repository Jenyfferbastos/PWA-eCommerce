import { Icons } from "../Icons/Icons";
import "./HeaderStyle";
import {
  ButtonsDesktop,
  ButtonsMobile,
  HeaderStyle,
  Home,
  LinkStyle,
  LogoStyle,
  Navigation,
  Search,
  SearchStyle,
} from "./HeaderStyle";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { VerticalCard } from "../VerticalCard/VerticalCard";
import ImageBag2 from "../../assets/img/image-bag-2.png";
import { RatingsAndStepper } from "../RatingsAndStepper/RatingsAndStepper";
import { CodeCheck } from "../CodeCheck/CodeCheck";
import { Button } from "../ButtonsAndChips/ButtonsAndChipsLarge/Button";
import { userCartContext } from "../../context/useCartContext";

export function Header() {
  const [modal, setModal] = useState(false);
  const { cart } = userCartContext();
  const [cartSubTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(
      cart.reduce((accumulator, product) => {
        return accumulator + product.pricingBefore;
      }, 0)
    );
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("activeModal");
  } else {
    document.body.classList.remove("activeModal");
  }

  return (
    <HeaderStyle>
      <Home>
        <button>
          <Icons icon={"Menu"} />
        </button>
        <h1>Home</h1>
      </Home>
      <ButtonsMobile>
        <button>
          <Icons icon={"AddToHomeScreen"} />
        </button>
        <Link to="/Search">
          <button>
            <Icons icon={"Search"} />
          </button>
        </Link>
        <button>
          <Icons icon={"Notification"} />
        </button>
      </ButtonsMobile>

      <Navigation>
        <LogoStyle>
          <Link to='/Home'>
          <img src={Logo} />
          </Link>
        </LogoStyle>

        <LinkStyle>
          <Link to={"/Handbags"}>Handbags</Link>
          <Link to={"/"}>Watches</Link>
          <Link to={"/"}>Skincare</Link>
          <Link to={"/"}>Jewellery</Link>
          <Link to={"/"}>Apparels</Link>
        </LinkStyle>
      </Navigation>

      <Search>
        <SearchStyle>
          <Icons icon={"Search"} />
          <input placeholder="Search for products or brands....." />
        </SearchStyle>

        <ButtonsDesktop>
          <button>
            <Icons icon={"wishlistFillFalse"} />
          </button>
          <button>
            <Link to='/UserProfile'>
            <Icons icon={"Profile"} />
            </Link>
          </button>
          <button onClick={toggleModal} className="btn-modal">
            <Icons icon={"bagFillFalse"} />
          </button>
        </ButtonsDesktop>
      </Search>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalContent">
            <button className="backModal" onClick={toggleModal}>
              <Icons icon="Del" />
              Back
            </button>
            {cart.map((product, index) => (
              <VerticalCard
                imageProduct={product.imgLink}
                nameProduct={product.name}
                desciptionProduct={product.description}
                valueProduct={product.pricingBefore.toString()}
                key={index}
              />
            ))}

            <div className="orderDetails">
              <div className="subtotal">
                <p>Subtotal:</p>
                <p>${cartSubTotal.toFixed(2)}</p>
              </div>
              <div className="tax">
                <p>Tax:</p>
                <p>$2.00</p>
              </div>
              <div className="total">
                <p>Total:</p>
                <p>${Number(cartSubTotal + 2).toFixed(2)}</p>
              </div>
            </div>

            <div className="containerEndModal">
              <CodeCheck placeholder={"Apply Coupon Code"} />
              <Link to="/MyCarts">
                <Button name={"Place Order"} icon={""} />
              </Link>
              <Link to="/*" className="linkContinueShopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </HeaderStyle>
  );
}
