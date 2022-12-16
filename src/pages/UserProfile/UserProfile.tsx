import { Link } from "react-router-dom";
import imageProfile from "../../assets/img/prodile=picture.svg";
import { ButtonFalseBack } from "../../components/ButtonsAndChips/ButtonsAndChipsSmall/ButtonFalseBack";
import { ButtonTrueBack } from "../../components/ButtonsAndChips/ButtonsAndChipsSmall/ButtonTrueBack";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Icons } from "../../components/Icons/Icons";
import { UserProfileStyle } from "./UserProfileStyle";

export function UserProfile() {
  return (
  <>
    <UserProfileStyle>
      <Header />
      <div className="sideNavigation">
        <h1>Personal Information</h1>
        <div className="linksSideNavigation">
          <div className="link">
            <Link to="/*">Personal Information</Link>
            <Icons icon="ChevronRight" />
          </div>
          <div className="link">
            <Link to="/*">Refer and Earn</Link>
            <Icons icon="ChevronRight" />
          </div>
          <div className="link">
            <Link to="/*">My Orders</Link>
            <Icons icon="ChevronRight" />
          </div>
          <div className="link">
            <Link to="/*">My Wishlist</Link>
            <Icons icon="ChevronRight" />
          </div>
          <div className="link">
            {" "}
            <Link to="/*">My Reviews</Link>
            <Icons icon="ChevronRight" />
          </div>
          <div className="link">
            <Link to="/*">My Address Book</Link>
            <Icons icon="ChevronRight" />
          </div>
          <div className="link">
            <Link to="/*">My Saved Cards</Link>
            <Icons icon="ChevronRight" />
          </div>
        </div>
      </div>
      <div className="containerProfile">
        <div className="containerLogout">
        <ButtonFalseBack name={"Logout"} icon={"Logout"} />
        </div>
        <h2>Personal Information</h2>
        <form className="formProfile">
          <div className="profilePicture">
            <img src={imageProfile} />
            <ButtonTrueBack name={"Upload"} icon={""} />
            <button className="buttonDelete">
              <Icons icon="DeleteSmallRed" />
              Delete
            </button>
          </div>
          <div className="containerNameComplete">
            <div className="containerInput">
            <label>First Name</label>
            <input type="text" name="First Name" placeholder="First Name" />
            </div>

            <div className="containerInput">
            <label>Last Name</label>
            <input type="text" name="Last Name" placeholder="Last Name" />
            </div>
          </div>
          <div className="containerInput containerEmail">
          <label>Email</label>
          <input type="text" name="Email" placeholder="nameuser@name.com" />
          </div>

          <div className="containerInput containerNumber">
            <div className="labelAndDDD">
          <label>Mobile Number</label>
          <input type="text" name="Mobile Number" placeholder="+11" className="mobileDDD"/>
          </div>
          <input type="text" name="Mobile Number" placeholder="202-555-0114" className="mobileNumber"/>
          </div>

          <div className="containerInput containerDate">
          <label>Date of birth</label>
          <input type="date" name="Date Of Birth" />
          </div>

          <h2>Change Password</h2>
          <div className="containerInput containerPassword">
          <label>Current Password</label>
          <input type="password" name="Current Password" />
          </div>
          
          <div className="containerInput containerPassword">
          <label>New Password</label>
          <input type="password" name="New Password" />
          </div>

          <div className="containerInput containerPassword">
          <label>Confirm Password</label>
          <input type="password" name="Confirm Password" />
          </div>
          <div className="buttonSubmit">
          <ButtonTrueBack name={"Save Changes"} icon={""} />
          </div>
        </form>
      </div>
    </UserProfileStyle>
    <Footer />
    </>
  );
}
