import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/BhumitPrajapati")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="bg-slate-800 text-center text-orange-400 m-4 p-4">
      <h1>
        Github Followers: {data.followers}
      </h1>
        <img
          src={data.avatar_url}
          alt="avatar"
          className="rounded-full h-64 w-64"
        />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLodder = async () => {
  const response = await fetch("https://api.github.com/users/BhumitPrajapati");
  const data = await response.json();
  return data;
};
