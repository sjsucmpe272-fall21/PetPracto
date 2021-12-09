import TopNavBar from './TopNavBar';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  margin: '10px auto',
  width: '80%',
  height: '80%',
  border: '2px solid black',
  padding: '15px',
  boxShadow: '1px 1px 25px black',
  // backgroundColor: "yellow"
};

// let VetLocations = [
//   { lat: 37.346629, lng: -121.915371, name: 'Dr. Harrison' },
//   { lat: 37.350949, lng: -121.864326, name: 'Dr. Sam Wells' },
//   { lat: 37.450949, lng: -121.764326, name: 'Dr. Sandra Matt' },
//   { lat: 37.550949, lng: -121.564326, name: 'Dr. Stan' },
//   { lat: 37.650949, lng: -121.264326, name: 'Dr. Knoxx' },
//   { lat: 37.750949, lng: -121.564326, name: 'Dr. SNTG' },
// ];

export class MapsPage extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {},
    latitude: 23.406012,
    longitude: 79.45809, // Shows the InfoWindow to the selected place upon a marker
    vets: [],
  };

  componentDidMount = async () => {
    console.log('Mounted');
    this.getVetDetails();
  };

  getVetDetails = async () => {
    const res = await axios.get(`http://localhost:3030/Vet/vetDetails`);
    console.log('Vet Details', res);
    this.setState({ vets: res.data });
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

    console.log('SS', this.state.selectedPlace);
  };
  showPosition(position) {
    console.log(position);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }
  getLatLong = () => {
    if (navigator.geolocation) {
      console.log(this.state.activeMarker);
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          // activeMarker: position.coords
        });
      });
    } else {
      alert('Geolocation is not supported by this browser');
    }
  };
  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div>
        <TopNavBar />
        <div>
          <div className='map-wrapper' style={{ backgroundColor: 'lightblue' }}>
            <div className='location-display-wrapper'>
              <p>Location</p>
              <p>
                Current Coordinates: {this.state.latitude} ,{' '}
                {this.state.longitude}
              </p>
              <button onClick={this.getLatLong}> Get Location </button>
            </div>
            <div
              style={{
                // marginLeft: '25%',
                // marginRight: '20%',
                width: '100%',
                height: '100%',
                // backgroundColor: "#5892d8"
              }}
            >
              <Map
                google={this.props.google}
                zoom={6}
                style={mapStyles}
                center={{
                  lat: this.state.latitude,
                  lng: this.state.longitude,
                }}
              >
                {this.state.vets.map((marker) => (
                  <Marker
                    onClick={this.onMarkerClick}
                    name={marker.VetName}
                    position={{ lat: marker.Lat, lng: marker.Lon }}
                    key={marker}
                  />
                ))}

                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
                >
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                  </div>
                </InfoWindow>
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapsPage);
