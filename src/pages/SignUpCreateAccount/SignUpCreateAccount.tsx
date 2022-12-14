import { Link } from "react-router-dom";
import { SignUpStyle } from "./SignUpCreateAccountStyle";

export function SignUpCreateAccount() {
  return (
    <SignUpStyle>
      <h1>Enter your phone number</h1>
      <form>
        <div className="containerInput">
        <input
          className="inputCodDDI"
          placeholder="+11"
          type="text"
        />
        <input
          className="inputNumber"
          placeholder="0986757684968"
          type="text"
        />
        </div>
        <p>A 4 digit code will be sent to this number.</p>
        <Link to='/SignUpValidation'><button>Next</button></Link>
      </form>
    </SignUpStyle>
  );
}
