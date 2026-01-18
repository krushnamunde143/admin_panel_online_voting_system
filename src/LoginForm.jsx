import React, { useState } from "react";


function LoginForm() {
  const [formData, setFormData] = useState({
    adminId: "",
    adminAdhar: "",
    adminPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", formData);
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h3>Admin Id</h3>
        <input
          type="text"
          name="adminId"
          value={formData.adminId}
          onChange={handleChange}
          required
        />

        <h3>Admin Adhar No</h3>
        <input
          type="text"
          name="adminAdhar"
          value={formData.adminAdhar}
          onChange={handleChange}
          required
        />

        <h3>Admin Password</h3>
        <input
          type="password"
          name="adminPassword"
          value={formData.adminPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
