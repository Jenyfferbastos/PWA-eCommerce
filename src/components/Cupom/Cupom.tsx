import { Link } from "react-router-dom";
import { CupomStyle } from "./CupomStyle";

export function Cupom(){
  return(
    <CupomStyle>
    <div>
    <p className="textCupom">Get upto 30% Off on order value above $100</p>
    <Link to="/*" className="linkTermsAndConditions">Terms & Conditions</Link>
    </div>
    <div className="codeCupom">
      <p className="useCode">Use Code</p>
      <p className="code">ORDER100</p>
    </div>
  </CupomStyle>
  )
}