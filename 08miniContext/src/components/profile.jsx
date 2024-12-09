import React, { useContext } from "react";
import UserContext from "../Context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return <h1 className="text-white text-center p-8">Please login</h1>;

  return (
    <div className="text-white text-center">
      <h1>Welcome</h1>
      <h2>Username: {user.username}</h2>
    </div>
  );
}

export default Profile;
