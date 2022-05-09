import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Maps extends Component {
    render() {
        return (
          <Map
            google={this.props.google}
            style={{ width: "80%", height: "70%" }}
            zoom={5}
            initialCenter={{
              lat: 1.2921,
              lng: 36.8219,
            }}
          >
            <Marker />             
        
          </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAE5I-WOS__yUmQYayenALFeZdpfGEVJiY",
  
})(Maps);