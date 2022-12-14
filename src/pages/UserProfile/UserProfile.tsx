import imageProfile from "../../assets/img/prodile=picture.svg";

export function UserProfile() {
  return (
    <>
      <h2>Personal Information</h2>
      <form>
        <div className="profilePicture">
          <img src={imageProfile} />
          <button>Upload</button>
          <button>Delete</button>
        </div>
        <div className="containerNameComplete">
        <label>First Name</label>
        <input type="text" name="First Name" placeholder="First Name"/>

        <label>Last Name</label>
        <input type="text" name="Last Name" placeholder="Last Name"/>
        </div>
        <label>Email</label>
        <input type="text" name="Email" placeholder="nameuser@name.com"/>

        <label>Mobile Number</label>
        <input type="text" name="Mobile Number" placeholder="+11"/>
        <input type="text" name="Mobile Number" placeholder="202-555-0114"/>

        <label>Date of birth</label>
        <input type="date" name="Date Of Birth"/>

        <h2>Change Password</h2>

        <label>Current Password</label>
        <input type="password" name="Current Password"/>

        <label>New Password</label>
        <input type="password" name="New Password"/>

        <label>Confirm Password</label>
        <input type="password" name="Confirm Password"/>

        <button type="submit">Save Changes</button>
      </form>
    </>
  );
}
