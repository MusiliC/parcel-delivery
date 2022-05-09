import React, { useEffect } from "react";
import { useParams } from "react-router";
import { deleteAParcel, fetchParcel } from "../../redux/actions/parcelActions";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import "./parcelDetails.css";

function ParcelDetails() {
   const navigate = useNavigate();
  const parcel = useSelector((state) => state.selectParcel[0]);
 
  const dispatch = useDispatch();
  const { id } = useParams();

const handleDelete = () =>{
  dispatch(deleteAParcel(id))
  console.log("parcel deleted !");
  console.log(parcel.isDeleted);
}

const handleTrack = () =>{
  navigate("/track")
}

  useEffect(() => {
     dispatch(fetchParcel(id));
  }, [id]);

  return (
    <div className="parcel-details-description">
      <div className="parcel-container-description">
        <div className="parcel-data">
          <p>
            <span>Parcel Description:</span> {parcel.description}
          </p>
          <p>
            <span>Sender Name:</span> {parcel.sender_name}
          </p>
          <p>
            <span>Sender Number:</span> {parcel.sender_number}
          </p>
          <p>
            <span> Receiver Name:</span> {parcel.receiver_name}
          </p>
          <p>
            <span> Receiver Number:</span> {parcel.receiver_number}
          </p>
          <p>
            <span>Start Location:</span> {parcel.start_location}
          </p>
          <p>
            <span> End Location:</span> {parcel.end_location}
          </p>
          <p>
            <span> Send Date:</span> {parcel.send_date}
          </p>
          <div className="parcel-details-buttons">
            <button id="deleteButton" onClick={handleDelete}>Delete Parcel</button>
            <button>Update Parcel</button>
            <button onClick={handleTrack}>Track Parcel</button>
          </div>
        </div>
        <div className="parcel-details-bg">
          <img src="/pics/picture.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ParcelDetails;
