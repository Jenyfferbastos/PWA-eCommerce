import { Link } from "react-router-dom";
import { SignUpAcessStyle } from "./SignUpAcessStyle";

export function SignUpAcess(){
  return(
    <SignUpAcessStyle>
    <h1>The shopping destination you need</h1>
    <Link to='/SignUp'><button>Get Started</button></Link>
    <a>I already have an account</a>
    </SignUpAcessStyle>
  )
}