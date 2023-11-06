import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Admin from "./components/Admin";
import PublicElement from "./PublicElement";
import UserElement from "./UserElement";
import AdminElement from "./AdminElement";
const AppRoutes = ({ CURRENT_USER_TYPE, User_types }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        />
        <Route
          path="/user"
          element={
            <UserElement
              CURRENT_USER_TYPE={CURRENT_USER_TYPE}
              User_types={User_types}
            >
              <User />
            </UserElement>
          }
        />
        <Route
          path="/user-profile"
          element={
            <UserElement
              CURRENT_USER_TYPE={CURRENT_USER_TYPE}
              User_types={User_types}
            >
              <User />
            </UserElement>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminElement
              CURRENT_USER_TYPE={CURRENT_USER_TYPE}
              User_types={User_types}
            >
              <Admin />
            </AdminElement>
          }
        />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
