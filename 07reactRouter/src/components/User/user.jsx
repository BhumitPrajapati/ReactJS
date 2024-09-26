import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className="bg-gray-700 text-orange-500 text-center m-6 p-4 text-3xl">User: {userid}</h1>
    </>
  );
}

export default User;
