import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.auth)

  console.log("current user --->", user.currentUser)

  return (
    <div className="flex justify-evenly gap-6">
      <h2>Logo</h2>

      <ul className="flex justify-evenly gap-3">
        <Link to={"/login"}>
          <li>Login</li>
        </Link>

        <Link to={"/signup"}>
          <li>Signup</li>
        </Link>

        <Link to={"/dashboard"}>
          <li>Dashboard</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
