import { Link } from "react-router-dom";
import { SignUpAcessStyle } from "./SignUpAcessStyle";
import ImageUnsplash1 from "../../assets/img/unsplash_D4jRahaUaIc.png";
import ImageUnsplash2 from "../../assets/img/unsplash_FK81rxilUXg.png";
import ImageUnsplash3 from "../../assets/img/unsplash_GLg0z5z8EQU.png";
import ImageUnsplash4 from "../../assets/img/unsplash_jo8C9bt3uo8.png";
import ImageUnsplash5 from "../../assets/img/unsplash_spP6LqxN0-g.png";
import ImageUnsplash6 from "../../assets/img/unsplash_Xn7GvimQrk8.png";
import { Button } from "../../components/ButtonsAndChips/ButtonsAndChipsLarge/Button";

export function SignUpAcess(){
  return(
    <SignUpAcessStyle>
      <div className="containerImages">
      <img src={ImageUnsplash1} />
      <img src={ImageUnsplash2} />
      <img src={ImageUnsplash3} />
      <img src={ImageUnsplash4} />
      <img src={ImageUnsplash5} />
      <img src={ImageUnsplash6} />
      <img src={ImageUnsplash1} />
      <img src={ImageUnsplash2} />
      <img src={ImageUnsplash3} />
      <img src={ImageUnsplash4} />
      </div>
      <div className="Main">
    <h1>The shopping destination you need</h1>
    <Link to='/SignUp'><Button name={"Get Started"} icon={""} /> </Link>
    <a className="haveAccount">I already have an account</a>
    </div>
    </SignUpAcessStyle>
  )
}