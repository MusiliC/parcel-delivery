import React,{useEffect} from "react";
import "./profile.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/actions/userActions";

function Profile() {

const dispatch = useDispatch();
const users = useSelector((state) => state.selectUser);
console.log(users);

useEffect(() => {
  dispatch(selectUser());
  // console.log(user);
}, []);


  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-title">
            <div className="profile-icon">
              <img src="/pics/user.png" alt="" />
            </div>
            <div className="profile-name">Profile</div>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-pic">
            <img src="/pics/pizza.png" alt="" />
          </div>
        </div>
        <div className="profile-footer">
          <div className="profile-footer-content">
            <p>User Name: </p>
            <p>Email: </p>
            <p>Phone Number: </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
