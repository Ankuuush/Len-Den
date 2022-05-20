import React from "react";
import "./Profile.css";
const Profile = (props) => {
  const { userDetails } = props;
  return (
    <>
      <div className="containerTest">
        <img
          className="bio"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
        <div className="bio">
          <p className="bioItem">Name: {userDetails.name}</p>
          <p className="bioItem">Phone No.: {userDetails.phone_no}</p>
          <p className="bioItem">Email: {userDetails.email}</p>
          <p className="bioItem">Address: {userDetails.address}</p>
          <p className="bioItem">Profession: {userDetails.profession}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
