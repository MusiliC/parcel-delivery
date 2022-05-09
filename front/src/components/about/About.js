import React from 'react'
import { Link } from "react-router-dom";
import './about.css'

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-bg">
          <img src="/pics/cap.png" alt="" />
        </div>
        <div className="about-info">
          <div className="abt-title">
            <h2> About Us</h2>
            <div className="underline"></div>
          </div>

          <div className="title-body">
            <p>
              Offering fast and easy pickup and delivery for parcels Parcel
              delivery system is one of the most popular systems on the market.
              Is also one of the most versatile services allowing you to sent
              and order from different parts across the country. Free and
              discounted delivery is also available for at least sending many
              parcels at once.
            </p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="down-title">
          <p>More Information About our Services</p>
        </div>
        <div className="underline-down"></div>
        <div className="about-down">
          <div className="about-right">
            <p>
              Whether you're looking to save time on delivery, Parcel delivery
              system is a quick and convenient way to get parcels directly to
              your door. It offers both pickup and delivery and takes a smaller
              commission than other delivery sites, allowing independent
              delivery shops to keep costs low.
            </p>
          </div>
          <div className="about-left">
            <p>
              The choice of the delivery system is based on the following
              criteria
            </p>
            <ul>
              <li>Availability</li>
              <li>Selection</li>
              <li>Fee</li>
              <li>Convenience</li>
            </ul>
          </div>
        </div>
        <div className="about-button">
         <Link to="/"> <button>Back Home</button></Link>   
        </div>
      </div>
    </div>
  );
}

export default About