import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps";

class MapMarkerList extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            //center of the map
            defaultCenter: {
                lat: 59.6989881,
                lng: -110.6823208
            },
            windowPosition: null, //position of the info window
            showInfoWindow: false, //controls the info window is visible or not
            current_name: '' //the content of the info window (name of park that's currently selected.)
        }
    }

    //Subscribes to the redux store object 'currentSelections'
    componentWillMount() {
        this.context.store.subscribe(() => {
            let state = this.context.store.getState().currentSelections;
            this.setState({
                windowPosition: state.position,
                showInfoWindow: state.showInfoWindow,
                current_name: state.key
            });
        });
    }

    //Toggles the little info window that shows the name of the park when you click a marker or hover on a card
    toggleInfoWindow(name, loc) {

        if (loc == null) {
            this.setState({ windowPosition: null });
            return;
        }
        let markerLoc = {
            lat: loc.latLng.lat(),
            lng: loc.latLng.lng()
        };
        this.setState({
            current_name: name,
            windowPosition: markerLoc,
            showInfoWindow: true
        });
    }

    render() {

        let parks = this.props.parks;

        return (
            <section style={{ height: "100%", width: "40%" }}>
                <GoogleMapLoader
                    containerElement={
                        <div style={{height: "100%",}}/>
                    }
                    googleMapElement={
                        <GoogleMap
                            defaultZoom={3}
                            defaultCenter={this.state.defaultCenter}
                            >
                            {parks.map((row, key) => (
                                <Marker
                                    position={{ lat: row.latitude, lng: row.longitude }}
                                    key={row.name}
                                    onClick={this.toggleInfoWindow.bind(this, row.name)}
                                    >

                                </Marker>
                                
                            ))}

                            {
                                this.state.showInfoWindow &&
                                <InfoWindow
                                    position={this.state.windowPosition}
                                    onCloseclick={(e) => { this.setState({ showInfoWindow: false }) } }
                                    options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
                                    >
                                    {this.state.current_name}
                                </InfoWindow>
                            }
                        </GoogleMap>
                    }
                    />
            </section>
        );
    }
}

MapMarkerList.contextTypes = { store: React.PropTypes.object };

export default MapMarkerList;