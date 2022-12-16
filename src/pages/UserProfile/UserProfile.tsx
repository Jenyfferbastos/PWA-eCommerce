import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import imageProfile from "../../assets/img/prodile=picture.svg";
import { User } from "../../interfaces/User";
import { createUser } from "../../services/createUser";

export function UserProfile() {
  const [values, setValues] = useState({});

  const handleFormChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name.toLocaleLowerCase().replace(/\s+/g, "")]:
        event.target.value,
    });
  };

  const handleCreateUser = async (userPayload: User) => {
    await createUser(userPayload);
  };

  const handleSubmit = () => {
    // handleCreateUser({
    //   bornDate: values.x
    // });
    console.log(values);
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <p>Order created successfully!</p>,
    });
  };
  return (
    <>
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="profilePicture">
          <img src={imageProfile} />
          <button>Upload</button>
          <button>Delete</button>
        </div>
        <div className="containerNameComplete">
          <label>First Name</label>
          <input
            type="text"
            name="First Name"
            placeholder="First Name"
            onChange={handleFormChanges}
          />

          <label>Last Name</label>
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            onChange={handleFormChanges}
          />
        </div>
        <label>Email</label>
        <input
          type="text"
          name="Email"
          placeholder="nameuser@name.com"
          onChange={handleFormChanges}
        />

        <label>Mobile Number</label>
        <input
          type="text"
          name="Mobile Number"
          placeholder="+11"
          onChange={handleFormChanges}
        />
        <input
          type="text"
          name="Mobile Number"
          placeholder="202-555-0114"
          onChange={handleFormChanges}
        />

        <label>Date of birth</label>
        <input type="date" name="Date Of Birth" onChange={handleFormChanges} />

        <h2>Change Password</h2>

        <label>Current Password</label>
        <input
          type="password"
          name="Current Password"
          onChange={handleFormChanges}
        />

        <label>New Password</label>
        <input
          type="password"
          name="New Password"
          onChange={handleFormChanges}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="Confirm Password"
          onChange={handleFormChanges}
        />

        <button type="submit">Save Changes</button>
      </form>
    </>
  );
}
