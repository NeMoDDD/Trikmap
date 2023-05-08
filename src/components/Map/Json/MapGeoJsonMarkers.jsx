import React from "react";
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import '../Map.css';
import ChuyGeoJsonLayer from "../Regions/Chuy/ChuyJsonLayerFunc";
import TalasGeoJsonLayer from "../Regions/Talas/TalasJsonLayerFunc";
import OshGeoJsonLayer from "../Regions/Osh/OshJsonLayerFunc";
import BatkenGeoJsonLayer from "../Regions/Batken/BatkenJsonLayerFunc";
import NarynGeoJsonLayer from "../Regions/Naryn/NarynJsonLayerFunc";
import JalalAbadGeoJsonLayer from "../Regions/JalalAbad/JalalAbadJsonLayerFunc";

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
    state = {
        lat: 41.875969,
        lng: 73.603698,
        zoom: 7,

        geoJsonIsVisibleAll: [
            {geoJsonIsVisible: true, name: "chuy"},
            {geoJsonIsVisible: true, name: "talas"},
            {geoJsonIsVisible: true, name: "osh"},
            {geoJsonIsVisible: true, name: "batken"},
            {geoJsonIsVisible: true, name: "jalalabad"},
            {geoJsonIsVisible: true, name: "naryn"},
            {geoJsonIsVisible: true, name: "issykkol"},
        ]
    };

    onGeojsonToggleAll = () => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }
    onGeojsonToggleChuy = () => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: false}) : obj)
            )
        }))
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj.name === "chuy" ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }
    onGeojsonToggleTalas = () => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: false}) : obj)
            )
        }))
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj.name === "talas" ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }
    onGeojsonToggleOsh = () => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: false}) : obj)
            )
        }))
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj.name === "osh" ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }
    onGeojsonToggleBatken = () => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: false}) : obj)
            )
        }))
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj.name === "batken" ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }
    onGeojsonToggleJalalAbad = () => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: false}) : obj)
            )
        }))
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj.name === "jalalabad" ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }
    onGeojsonToggleNaryn = () => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: false}) : obj)
            )
        }))
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj.name === "naryn" ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
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
                    <div className="region-name__geojson">
                        <input type="radio"
                               name="layertoggle" id="all"
                               value={"all"} onChange={this.onGeojsonToggleAll}/>
                        <label htmlFor={"all"}>All</label>
                    </div>
                    <div className="region-name__geojson">
                        <input type="radio"
                               name="layertoggle" id="chuy"
                               value={"chuy"} onChange={this.onGeojsonToggleChuy}/>
                        <label htmlFor={"chuy"}>Chuy</label>
                    </div>
                    <div className="region-name__geojson">
                        <input type="radio"
                               name="layertoggle" id="talas"
                               value={"talas"} onChange={this.onGeojsonToggleTalas}/>
                        <label htmlFor={"talas"}>Talas</label>
                    </div>
                    <div className="region-name__geojson">
                        <input type="radio"
                               name="layertoggle" id="osh"
                               value={"osh"} onChange={this.onGeojsonToggleOsh}/>
                        <label htmlFor={"osh"}>Osh</label>
                    </div>
                    <div className="region-name__geojson">
                        <input type="radio"
                               name="layertoggle" id="batken"
                               value={"batken"} onChange={this.onGeojsonToggleBatken}/>
                        <label htmlFor={"batken"}>Batken</label>
                    </div>
                    <div className="region-name__geojson">
                        <input type="radio"
                               name="layertoggle" id="jalalabad"
                               value={"jalalabad"} onChange={this.onGeojsonToggleJalalAbad}/>
                        <label htmlFor={"jalalabad"}>JalalAbad</label>
                    </div>
                    <div className="region-name__geojson">
                        <input type="radio"
                               name="layertoggle" id="naryn"
                               value={"naryn"} onChange={this.onGeojsonToggleNaryn}/>
                        <label htmlFor={"talas"}>Naryn</label>
                    </div>
                    <div className="region-name__geojson">

                    </div>

                </div>

                {this.state.geoJsonIsVisibleAll[0].geoJsonIsVisible &&
                    <ChuyGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false}/>
                }
                {this.state.geoJsonIsVisibleAll[1].geoJsonIsVisible &&
                    <TalasGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false}/>
                }
                {this.state.geoJsonIsVisibleAll[2].geoJsonIsVisible &&
                    <OshGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false}/>
                }
                {this.state.geoJsonIsVisibleAll[3].geoJsonIsVisible &&
                    <BatkenGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false}/>
                }
                {this.state.geoJsonIsVisibleAll[4].geoJsonIsVisible &&
                    <JalalAbadGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false}/>
                }
                {this.state.geoJsonIsVisibleAll[5].geoJsonIsVisible &&
                    <NarynGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false}/>
                }


                {/*<Marker position={center}>*/}
                {/*    <Popup><div>Hello</div></Popup>*/}
                {/*</Marker>*/}
            </MapContainer>
        );
    }
};

export default MapComponent;