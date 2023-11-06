import React from "react";
import AppRoutes from "./AppRoutes";
import { Link } from "react-router-dom";

const App = () => {
  const User_types = {
    PUBLIC: "Public User",
    NORMAL_USER: "Normal User",
    ADMIN_USER: "Admin User",
  };

  const CURRENT_USER_TYPE = User_types.PUBLIC;
  return (
    <div>
      <span className="logged">You're Logged In as: {CURRENT_USER_TYPE}</span>
      <div style={{ display: "flex", gap: 50 }}>
        <Link to={"/"}>Home</Link>
        {CURRENT_USER_TYPE === User_types.NORMAL_USER ||
        CURRENT_USER_TYPE === User_types.ADMIN_USER ? (
          <>
            <Link to={"/user"}>User</Link>
            <Link to={"/user-profile"}>User Profile</Link>
          </>
        ) : null}

        {CURRENT_USER_TYPE === User_types.ADMIN_USER ? (
          <>
            <Link to={"/admin"}>Admin</Link>
          </>
        ) : null}
      </div>
      <AppRoutes
        User_types={User_types}
        CURRENT_USER_TYPE={CURRENT_USER_TYPE}
      />
    </div>
  );
};

export default App;
