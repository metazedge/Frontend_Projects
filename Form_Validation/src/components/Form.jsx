import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validations here
    const { username, email, password } = formData;
    if (!username) {
      toast.error("Username required.");
    } else if (!email) {
      toast.error("Email required.");
    } else if (!password) {
      toast.error("Password required.");
    } else if (!username.match(/^[a-zA-Z0-9]+$/)) {
      toast.error("Username must contain only letters and numbers.");
    } else if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      toast.error("Invalid email address.");
    } else if (
      !password.match(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      toast.error(
        "Password must contain at least one capital letter, one lowercase letter, one special character, one number, and be at least 8 characters long."
      );
    } else {
      // Form submission logic here
      toast.success("Registration successful!");
      // Reset the form
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="center-container">
        <Toaster position="top-center" reverseOrder={false} />
      <div className="registration-form">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            //   autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
