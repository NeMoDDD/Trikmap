import React from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../Map.css';
import ChuyGeoJsonLayer from "../Regions/Chuy/ChuyJsonLayerFunc";
import TalasGeoJsonLayer from "../Regions/Talas/TalasJsonLayerFunc";

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
    state = {
        lat: 41.875969,
        lng: 73.603698,
        zoom: 7,
        geoJsonIsVisibleChuy: false,
        geoJsonIsVisibleTalas: false,
    };

    onGeojsonToggleChuy = (e) => {
        this.state.geoJsonIsVisibleTalas = false
        this.setState({
            geoJsonIsVisibleChuy: e.currentTarget.checked
        });
    }
    onGeojsonToggleTalas = (e) => {
        this.state.geoJsonIsVisibleChuy = false
        this.setState({
            geoJsonIsVisibleTalas: e.currentTarget.checked
        });
    }

    render() {
        let center = [this.state.lat, this.state.lng];

        return (
            <MapContainer zoom={this.state.zoom} center={center}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />

                <div className="geojson-toggle">
                    <input type="radio"
                           name="layertoggle" id="chuy"
                           value={this.state.geoJsonIsVisibleChuy} onChange={this.onGeojsonToggleChuy}/>
                    <label htmlFor={"chuy"}>Chuy</label><br/>
                    <input type="radio"
                           name="layertoggle" id="talas"
                           value={this.state.geoJsonIsVisibleTalas} onChange={this.onGeojsonToggleTalas}/>
                    <label htmlFor={"talas"}>Talas</label>
                </div>

                {this.state.geoJsonIsVisibleChuy &&
                    <ChuyGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false}/>
                }
                {this.state.geoJsonIsVisibleTalas &&
                    <TalasGeoJsonLayer url="places.json" cluster={false}/>
                }

                {/*<Marker position={center}>*/}
                {/*    <Popup><div>Hello</div></Popup>*/}
                {/*</Marker>*/}
            </MapContainer>
        );
    }
};

export default MapComponent;