import React from "react";
import L from 'leaflet';
import {MapContainer, Marker, Popup, TileLayer, Pane} from "react-leaflet";
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
                    <Popup pane="myPane" className={'popup-fixed'}>Какой то крутой текст!!!</Popup>
                    <Pane name="myPane" style={{ zIndex: 500 }}>
                        {/* Содержимое панели */}
                        <div style={{ backgroundColor: 'white', padding: '10px' }}>
                            <h3>Панель</h3>
                            <p>Содержимое панели внутри всплывающего окна.</p>
                        </div>
                    </Pane>
                </Marker>
            </MapContainer>
        )
    }
}

export default MapComponent;


