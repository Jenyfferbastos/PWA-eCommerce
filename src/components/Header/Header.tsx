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
import { Link} from "react-router-dom";

export function Header() {
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
          <button>
            <Icons icon={"bagFillFalse"} />
          </button>
        </ButtonsDesktop>
      </Search>
    </HeaderStyle>
  );
}
