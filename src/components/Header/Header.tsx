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
import { useContext, useState } from "react";
import { VerticalCard } from "../VerticalCard/VerticalCard";
import ImageBag2 from "../../assets/img/image-bag-2.png";
import { RatingsAndStepper } from "../RatingsAndStepper/RatingsAndStepper";
import { CodeCheck } from "../CodeCheck/CodeCheck";
import { Button } from "../ButtonsAndChips/ButtonsAndChipsLarge/Button";
import { CartContext } from "../../context/Cart";

export function Header() {
  const [modal, setModal] = useState(false);
  const { cart } = useContext(CartContext);
  const [cartSubTotal] = useState(
    cart.products.reduce((accumulator, product) => {
      return accumulator + product.pricingBefore;
    }, 0)
  );

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
        <button>
          <Icons icon={"Search"} />
        </button>
        <button>
          <Icons icon={"Notification"} />
        </button>
      </ButtonsMobile>

      <Navigation>
        <LogoStyle>
          <img src={Logo} />
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
            <Icons icon={"Profile"} />
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
            {cart.products.map((product, index) => (
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
                <p>${cartSubTotal}</p>
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
