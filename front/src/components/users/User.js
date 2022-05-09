import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/userActions";
import { useSelector } from "react-redux";
import "./users.css"

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers.loggedUsers);

  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="user-list">
      <div className="all-users">
              
      {users.map((data) => (
       
          <div className="one-user" key={data.id}>
            <p> <span> Username:</span> {data.username}</p>
            <p> <span>Phone Number:</span>  {data.phone_number}</p>
            <p> <span> Email:</span>  {data.email}</p>
          </div>
        
      ))}
      </div>
    </div>
  );
}

export default User;
