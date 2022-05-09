import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/userActions";



function Register() {

  const dispatch = useDispatch();

  const navigate = useNavigate();
 
  const [user, setUser] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    phone_number: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUser((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (user.password !== user.cpassword) {
      return setError("Passwords do not match");
    }
    if (user.password.length < 8 ){
      return setError("Password should be more than 8 characters!!")
    }

    dispatch(createUser(user));
    console.log("Account created successfully");
     navigate("/");
  };

  return (
    <div className="main-container">
    
      <div className="form-container-register">
        <form className="form">
          <h2 className="form-title">Create an Account</h2>
          {error && <div className="error">{error}</div>}

          <div className="form-group">
            <label htmlFor="">Full Name</label>
            <input
              required
              value={user.name}
              onChange={handleInputChange}
              name="full_name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              required
              value={user.username}
              onChange={handleInputChange}
              name="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              required
              value={user.email}
              onChange={handleInputChange}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Phone Number</label>
            <input
              required
              value={user.phone_number}
              onChange={handleInputChange}
              name="phone_number"
              type="text"
              placeholder="Enter your phone_number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              required
              value={user.password}
              onChange={handleInputChange}
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Confirm Password</label>
            <input
              required
              value={user.cpassword}
              onChange={handleInputChange}
              name="cpassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button className="btn" onClick={handleSubmit}>
            Register
          </button>
          <Link to="/login">
            {" "}
            <b> Login Here</b>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
