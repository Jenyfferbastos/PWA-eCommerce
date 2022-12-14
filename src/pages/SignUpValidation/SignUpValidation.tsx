import { Link } from "react-router-dom";
import { SignUpValidationStyle } from "./SignUpValidationStyle";

export function SignUpValidation() {
  return (
    <SignUpValidationStyle>
      <h1>Enter OTP</h1>
      <p>A 4 digit code was sent to your number.</p>
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
     
      <p>Didn't recieve the code?</p>
      <a>Request again</a>
      <Link to='/UserProfile'><button>Verify & Create Account</button></Link>
      </form>
    </SignUpValidationStyle>
  );
}
