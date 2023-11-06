import React from "react";
const AdminElement = ({ children, CURRENT_USER_TYPE, User_types }) => {
  if (CURRENT_USER_TYPE === User_types.ADMIN_USER) {
    return <div>{children}</div>;
  } else {
    return (
      <div
        style={{
          background: "red",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "10px 10px 10px black",
        }}
      >
        You do not have access to this page
      </div>
    );
  }
};

export default AdminElement;
