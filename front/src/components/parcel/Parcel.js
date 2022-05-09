import React, {useState} from 'react'
import './parcel.css'
//import Axios from "axios";
import {useDispatch} from 'react-redux';
import { createNewParcel} from '../../redux/actions/parcelActions'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Parcel() {
const userSystem = useSelector((state) => state.allUsers);
console.log(userSystem.user);
const dispatch = useDispatch();
const navigate = useNavigate();

const [parcel, setParcel] = useState({
  description: "",
  sender_number: "",
  sender_name: "",
  receiver_number: "",
  receiver_name: "",
  start_location: "",
  end_location:"",
  send_date: "",
  sender_id: '5e1dc145-4023-4e24-80b3-6189dc037824'
})

const handleInputChange = (e) => {
  setParcel((v) => ({...v, [e.target.name] : e.target.value}))
}

const handleParcel = (e) =>{
    e.preventDefault();
    console.log(parcel);
  
    dispatch(createNewParcel(parcel));
    navigate("/");

  // Axios.post("http://localhost:3005/parcels", {
  //   description: parcel.description,
  //   sender_number: parcel.sender_numberr,
  //   sender_name: parcel.senderName,
  //   receiver_number: parcel.receiverNumber,
  //   receiver_name: parcel.receiverName,
  //   start_location: parcel.startLocation,
  //   end_location: parcel.endLocation,
  //   send_date:parcel.sendDate
  // }).then(() =>{
  //   console.log("Parcel created successfully");
  // })

}

  return (
    <div className="body-container">
      <div className="parcel-container">
        <div className="parcel-title">Create A Parcel</div>
        <div className="parcel-underline"></div>
        <form action="">
          <div className="parcel-details">
            <div className="input-box-desc">
              <span className="details">Parcel Description</span>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="3"
                value={parcel.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="input-box">
              <span className="details">Sender Number</span>
              <input
                type="text"
                placeholder="Enter sender number"
                name="sender_number"
                required
                value={parcel.sender_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box">
              <span className="details">Sender Name</span>
              <input
                type="text"
                placeholder="Enter sender name"
                name="sender_name"
                required
                value={parcel.sender_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box">
              <span className="details">Receiver number</span>
              <input
                type="text"
                placeholder="Enter receiver number"
                name="receiver_number"
                required
                value={parcel.receiver_number}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <span className="details">Receiver name</span>
              <input
                type="text"
                placeholder="Enter receiver name"
                name="receiver_name"
                required
                value={parcel.receiver_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box">
              <span className="details">Start Location</span>
              <input
                type="text"
                placeholder="Enter start location"
                name="start_location"
                required
                value={parcel.start_location}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box">
              <span className="details">Destination Location</span>
              <input
                type="text"
                placeholder="Enter end location"
                name="end_location"
                required
                value={parcel.end_location}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-date">
              <span className="details-date">Send Date</span>
              <input
                type="date"
                required
                name="send_date"
                value={parcel.send_date}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="parcel-button">
            <button onClick={handleParcel}>Create Parcel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Parcel