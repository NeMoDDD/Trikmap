import React from "react";
import L from 'leaflet';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import './Map.css';


L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
    state = {
        lat: 42.81,
        lng: 73.85,
        zoom: 13
    };

    render() {
        var center = [this.state.lat, this.state.lng];

        return (
            <MapContainer zoom={this.state.zoom} center={center}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={center}>
                    <Popup>Какой то крутой текст!!!</Popup>
                </Marker>
            </MapContainer>
        )
    }
}

export default MapComponent;


