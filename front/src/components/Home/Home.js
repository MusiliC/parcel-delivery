import React from 'react'
import { Link} from "react-router-dom";
import './home.css'

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <div className="home-details">
          <div className="details-title">
            <p>Super Fast Delivery</p>
          </div>
          <div className="details-body">
            <h2>
              We have a faster <br />
              Delivery in <br /> Your town
            </h2>
          </div>
          <div className="details-footer">
            <p>
              We are most Faster, Favorite and Secure delivery service all over
              the country
            </p>
          </div>
          
          <div className="home-button">
         <Link to="/services">  <button className='start-button'>Get Started</button></Link>  
          </div>
        </div>
        <div className="home-picture">
          <img src="/pics/parcel.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home