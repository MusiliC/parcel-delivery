import React from 'react'
import './service.css'
import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="service">
      <div className="main-service">
        <div className="service-content">
          <div className="service-details">
            <h2 className="service-heading">
              Quick & Reliable <br /> Parcel Delivery!{" "}
            </h2>
            <div className="service-list">
              <p id="item">We offer the following services:</p>
              <ul>
                <li>Creating Parcels</li>
                <li>Secure Sending of parcels across the country</li>
                <li>Tracking Parcels</li>
              </ul>
            </div>
          </div>
          <div className="service-background">
            <img src="/pics/track.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="section-two">
        <div className="section-title">
          <p>
            We guarantee fast <br /> and safe transport for your packages
          </p>
        </div>

        <div className="services-offered">
          <div className="create">
            <Link to="/create">
              <div className="create-icon">
                <img src="/pics/sent.png" alt="" />
              </div>
              <div className="create-title">
                <p id="delivery-title">Create a Parcel </p>
                <p id="delivery-info">
                  Send a Parcel across the country save upto 70% on the cost of
                  DHL parcel delivery
                </p>
              </div>
            </Link>
          </div>
          <div className="parcel-list">
            {" "}
            <Link to="/parcels">
              <div className="list-icon">
                <img src="/pics/email.png" alt="" />
              </div>
              <div className="list-body">
                <p id="idelivery-title">Parcel List </p>
                <p id="delivery-info">
                  The following is a list of parcels that have to be delivered
                  to various destinations
                </p>
              </div>
            </Link>
          </div>
          {/* <div className="tracking">
            <Link to="/track">
              <div className="tracking-icon">
                <img src="/pics/ma.png" alt="" />
              </div>
              <div className="tracking-body">
                <p id="delivery-title">Parcel Tracking</p>
                <p id="delivery-info">
                  To get full information and tracking of your parcels location
                  across the country
                </p>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Service