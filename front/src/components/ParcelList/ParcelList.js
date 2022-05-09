import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";import { fetchParcels} from '../../redux/actions/parcelActions'


import './parcellist.css'

function ParcelList() {

const parcels = useSelector((state) => state.allParcels.parcels);
const dispatch = useDispatch();

console.log(parcels);

useEffect(() => {
  dispatch(fetchParcels());
},[])

  return (
    <div className="parcel-listing">
      <div className="parcel-listing-content" >
        {parcels.map((parcel) => (
          <Link to={`/parcel/${parcel.id}`} key={parcel.id}>
            <div className="single-parcel" key={parcel.id}>
              <div className="parcel-content" key={parcel.id}>
                <p>
                  <span>Parcel Description:</span> {parcel.description}
                </p>
                <p>
                  <span>Sender Name:</span> {parcel.sender_name}
                </p>
                <p>
                  <span> Receiver Name:</span> {parcel.receiver_name}
                </p>
            
              </div>

             
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ParcelList