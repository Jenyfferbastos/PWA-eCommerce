import { Link } from "react-router-dom";
import {
  ContainerLinks,
  ContainerLogos,
  ContainerStyle,
  ContainerTextStyle,
  FooterStyle,
  LocationStyle
} from "./FooterStyle";
import LogoInstagram from "../../assets/img/insta logo.png";
import LogoYoutube from "../../assets/img/youtube.png";
import LogoTwitter from "../../assets/img/twitter.png";
import LogoFacebook from "../../assets/img/fb logo.png";
import { Icons } from "../Icons/Icons";


export function Footer() {
  return (
    <FooterStyle>
      <ContainerLinks />
      <ContainerTextStyle>
        <Link to={"/*"}>
          <h1>Shop by Category</h1>
        </Link>
        <Link to={"/*"}>Skincare</Link>
        <Link to={"/*"}>Personal Care</Link>
        <Link to={"/*"}>Handbags</Link>
        <Link to={"/*"}>Apparels</Link>
        <Link to={"/*"}>Watches</Link>
        <Link to={"/*"}>Eye Wear</Link>
        <Link to={"/*"}>Jewellery</Link>
      </ContainerTextStyle>
      <ContainerTextStyle>
        <Link to={"/*"}>
          <h1>About</h1>
        </Link>
        <Link to={"/*"}>Contact Us</Link>
        <Link to={"/*"}>About Us</Link>
        <Link to={"/*"}>Careers</Link>
        <Link to={"/*"}>Press</Link>
      </ContainerTextStyle>
      <ContainerTextStyle>
        <Link to={"/*"}>
          <h1>Policy</h1>
        </Link>
        <Link to={"/*"}>Return Policy</Link>
        <Link to={"/*"}>Terms of Use</Link>
        <Link to={"/*"}>Sitemap</Link>
        <Link to={"/*"}>Security</Link>
        <Link to={"/*"}>Privacy</Link>
        <Link to={"/*"}>EPR Compliance</Link>
      </ContainerTextStyle>
      <ContainerLinks />
      <ContainerStyle>
      <ContainerLogos>
        <img src={LogoFacebook} />
        <img src={LogoInstagram} />
        <img src={LogoTwitter} />
        <img src={LogoYoutube} />
      </ContainerLogos>
      <LocationStyle>
        <Icons icon={'LocationWhite'} />
        <h3>United States</h3>
      </LocationStyle>
      <p>© 2021 | Cora Leviene All Rights Reserved</p>
      </ContainerStyle>
    </FooterStyle>
  );
}
