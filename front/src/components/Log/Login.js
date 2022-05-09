import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Axios from "axios";
import { log } from "../../redux/actions/userActions";
import { useSelector } from "react-redux";


function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSystem = useSelector((state) => state.allUsers.l);
  console.log(userSystem);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


 const handleInputChange = (e) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

 const handleLogin = (e) =>{
   e.preventDefault();

 dispatch(log(user));
  console.log("Checking the account....");
   navigate("/");
 }


  return (
    <div className="main-container">
      <div className="form-container">
        <div className="form">
          <h2 className="form-title">Log in</h2>
          {/* {error && <div className="error">{error}</div>} */}
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              value={user.email}
              onChange={handleInputChange}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              value={user.password}
              onChange={handleInputChange}
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="btn" onClick={handleLogin}>Login</button>
          <Link to="/register">
            {" "}
            <b>Create New Account? </b>{" "}
          </Link>
        </div>

        <div className="log-image">
          <img src="/pics/gift.jpg" alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Login