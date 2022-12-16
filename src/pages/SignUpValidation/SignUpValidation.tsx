import { Link } from "react-router-dom";
import { Button } from "../../components/ButtonsAndChips/ButtonsAndChipsLarge/Button";
import { SignUpValidationStyle } from "./SignUpValidationStyle";

export function SignUpValidation() {
  return (
    <SignUpValidationStyle>
      <div className="containerText">
      <h1>Enter OTP</h1>
      <p>A 4 digit code was sent to your number.</p>
      </div>
      <form>
      <div className="containerInput">
        <input  className="inputNumberOne"
          placeholder="0"
          type="text"/>
        <input  className="inputNumberTwo"
          placeholder="0"
          type="text"/>
        <input  className="inputNumberThree"
          placeholder="0"
          type="text"/>
        <input  className="inputNumberFour"
          placeholder="0"
          type="text"/>
      </div>
     <div className="navContainer">
      <p>Didn't recieve the code?</p>
      <a>Request again</a>
      </div>
      <Link to='/UserProfile'><Button name={"Verify & Create Account"} icon={""} /></Link>
      </form>
    </SignUpValidationStyle>
  );
}
