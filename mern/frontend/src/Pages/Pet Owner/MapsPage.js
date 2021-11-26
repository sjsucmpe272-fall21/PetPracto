// import React from 'react'
import TopNavBar from './TopNavBar'
// import { Map, GoogleApiWrapper } from 'google-maps-react';


import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    margin: "20px",
    width: '50%',
    height: '50%',
    border: '2px solid black',
    padding: "15px",
    boxShadow: "1px 1px 25px black",
    backgroundColor: "yellow"
};



export class MapsPage extends Component {

    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {},
        latitude: 0.00,
        longitude: 0.00        // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    showPosition(position) {
        console.log(position)
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }
    getLatLong = () => {

        if (navigator.geolocation) {
            console.log(this.state.activeMarker);
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    // activeMarker: position.coords
                })

            });


        }
        else {
            alert("Geolocation is not supported by this browser")
            // lat.innerHTML = 'Geolocation is not supported by this browser.';
            // lon.innerHTML = '';
        }

    }
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div>
                <TopNavBar />
                <div className="map-wrapper">
                    <div className="location-display-wrapper">
                        <p>Location</p>
                        <p>Current Coordinates: {this.state.latitude} , {this.state.longitude}</p>
                        <button onClick={this.getLatLong}> Get Location </button>
                    </div>
                    <div style={{ marginLeft: "25%", marginRight: "20%", width: '600px', height: '600px' }}>
                        <Map
                            google={this.props.google}
                            zoom={14}
                            style={mapStyles}
                            center={
                                {
                                    lat: this.state.latitude,
                                    lng: this.state.longitude
                                }
                            }
                        >
                            <Marker
                                onClick={this.onMarkerClick}
                                name={'Kenyatta International Convention Centre'}
                            />
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

        );
    }
}

export default MapsPage
