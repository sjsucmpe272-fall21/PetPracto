import TopNavBar from './TopNavBar';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  margin: '20px',
  width: '50%',
  height: '50%',
  border: '2px solid black',
  padding: '15px',
  boxShadow: '1px 1px 25px black',
  // backgroundColor: "yellow"
};

// async function getUserDetails()={
//     axios.get
// }

let VetLocations = [
  { lat: 37.346629, lng: -121.915371, name: 'Dr. Harrison' },
  { lat: 37.350949, lng: -121.864326, name: 'Dr. Sam Wells' },
  { lat: 37.450949, lng: -121.764326, name: 'Dr. Sandra Matt' },
  { lat: 37.550949, lng: -121.564326, name: 'Dr. Stan' },
  { lat: 37.650949, lng: -121.264326, name: 'Dr. Knoxx' },
  { lat: 37.750949, lng: -121.564326, name: 'Dr. SNTG' },
];

export class MapsPage extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {},
    latitude: 0.0,
    longitude: 0.0, // Shows the InfoWindow to the selected place upon a marker
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
      // lat.innerHTML = 'Geolocation is not supported by this browser.';
      // lon.innerHTML = '';
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

  getVetDetails = async () => {
    const vetDetails = await axios.get('http://localhost:3030/vetDetails');
    console.log(vetDetails);
  };

  componentDidMount = async () => {
    console.log('Mounted');
    this.getVetDetails();
  };

  render() {
    return (
      <div>
        <TopNavBar />
        <div>
          <div
            className='map-wrapper'
            style={{ backgroundColor: 'alicewhite' }}
          >
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
                marginLeft: '25%',
                marginRight: '20%',
                width: '600px',
                height: '600px',
              }}
            >
              <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                center={{
                  lat: this.state.latitude,
                  lng: this.state.longitude,
                }}
              >
                {VetLocations.map((marker) => (
                  <Marker
                    onClick={this.onMarkerClick}
                    name={marker.name}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    key={marker}
                  />
                ))}

                {/* <Marker
                               
                            /> */}
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
