import React from 'react'
import './track.css'
import Maps from "../maps/Maps"

function Tracking() {
  return (
    <div className="track-parcel">
      <div className="track-info">
      
        <div className="track-title">
          <h2>Parcel Track Results</h2>
        </div>
        <div className="track-underline"></div>
        <div className="track-body">
          <div className="track-results">
            <p>Parcel Description: </p>
            <p>Parcel Location: </p>
          </div>
          <div className="track-map">
            <img src="" alt="" />
          </div>
        </div>
        <div className="track-details">

          <Maps/>
         
        </div>
      </div>
    </div>
  );
}

export default Tracking