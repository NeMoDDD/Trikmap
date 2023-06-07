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
import IssykKolGeoJsonLayer from "../Regions/IssykKol/IssykKolJsonLayerFunc";
import {Button} from "antd"
import location from "../images/location.png"
import lake from "../images/lake.png"
import {connect, useSelector} from "react-redux";
import {getToursSelector} from "../../../Selectors/TourSelectors";
import {getTourTC} from "../../../reduxStore/tourReducer";
import gorge from "../images/daddys-gorges.png";

// указываем путь к файлам marker
// L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
// const {type} = useSelector(state => state.attractions)

const customIcon = L.icon({
    iconUrl: location,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});


class MapComponent extends React.Component {
    state = {
        lat: 41.875969,
        lng: 73.603698,
        zoom: 6.5,

        geoJsonIsVisibleAll: [
            {geoJsonIsVisible: true, name: "chuy"},
            {geoJsonIsVisible: true, name: "talas"},
            {geoJsonIsVisible: true, name: "osh"},
            {geoJsonIsVisible: true, name: "batken"},
            {geoJsonIsVisible: true, name: "jalalabad"},
            {geoJsonIsVisible: true, name: "naryn"},
            {geoJsonIsVisible: true, name: "issykkol"},
            {geoJsonIsVisible: true, name: "all"},
        ]
    };
    componentDidMount() {
        console.log(this.props.type)
    }

    onGeojsonToggleAll = (e) => {
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
    onGeojsonToggleIssykKol = () => {
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj ? Object.assign(obj, {geoJsonIsVisible: false}) : obj)
            )
        }))
        this.setState(prevState => ({
            geoJsonIsVisibleAll: prevState.geoJsonIsVisibleAll.map(
                obj => (obj.name === "issykkol" ? Object.assign(obj, {geoJsonIsVisible: true}) : obj)
            )
        }))
    }

    render() {
        let center = [this.state.lat, this.state.lng];

        return (
            <div className="main">
                <div className="title-block__geojson"><h2>Карта Кыргызстана</h2></div>
                <div className="geojson-toggle">
                    <div className="geojson-toggle__part">
                        <div className="region-name__geojson">
                            <Button type="default" onClick={this.onGeojsonToggleAll}
                                    className={this.state.geoJsonIsVisibleAll[7].geoJsonIsVisible ? "geojson-toggle__btn__active" : "geojson-toggle__btn"}>Все</Button>
                        </div>
                        <div className="region-name__geojson">
                            <Button type="default" onClick={this.onGeojsonToggleChuy}
                                    className={this.state.geoJsonIsVisibleAll[0].geoJsonIsVisible ? "geojson-toggle__btn__active" : "geojson-toggle__btn"}>Чуй</Button>
                        </div>
                        <div className="region-name__geojson">
                            <Button type="default" onClick={this.onGeojsonToggleTalas}
                                    className={this.state.geoJsonIsVisibleAll[1].geoJsonIsVisible ? "geojson-toggle__btn__active" : "geojson-toggle__btn"}>Талас</Button>
                        </div>
                        <div className="region-name__geojson">
                            <Button type="default" onClick={this.onGeojsonToggleOsh}
                                    className={this.state.geoJsonIsVisibleAll[2].geoJsonIsVisible ? "geojson-toggle__btn__active" : "geojson-toggle__btn"}>Ош</Button>
                        </div>
                    </div>
                    <div className="geojson-toggle__part">
                        <div className="region-name__geojson">
                            <Button type="default" onClick={this.onGeojsonToggleBatken}
                                    className={this.state.geoJsonIsVisibleAll[3].geoJsonIsVisible ? "geojson-toggle__btn__active" : "geojson-toggle__btn"}>Баткен</Button>
                        </div>
                        <div className="region-name__geojson">
                            <Button type="default" onClick={this.onGeojsonToggleJalalAbad}
                                    className={this.state.geoJsonIsVisibleAll[4].geoJsonIsVisible ? "geojson-toggle__btn__active" : "geojson-toggle__btn"}>Джалал-Абад</Button>
                        </div>
                        <div className="region-name__geojson">
                            <Button type="default" onClick={this.onGeojsonToggleNaryn}
                                    className={this.state.geoJsonIsVisibleAll[5].geoJsonIsVisible ? "geojson-toggle__btn__active" : "geojson-toggle__btn"}>Нарын</Button>
                        </div>
                    </div>
                    <div className="geojson-toggle__part">
                    <div className="region-name__geojson">
                            <Button type="default" onClick={this.onGeojsonToggleIssykKol}
                                    className={this.state.geoJsonIsVisibleAll[6].geoJsonIsVisible ? "geojson-toggle__btn__active" : "geojson-toggle__btn"}>Иссык-Куль</Button>
                        </div>
                    </div>

                </div>
                <MapContainer zoom={this.state.zoom} center={center} zoomControl={false}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    />


                    {this.state.geoJsonIsVisibleAll[0].geoJsonIsVisible &&
                        <ChuyGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false} marker={customIcon}/>
                    }
                    {this.state.geoJsonIsVisibleAll[1].geoJsonIsVisible &&
                        <TalasGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false} marker={customIcon}/>
                    }
                    {this.state.geoJsonIsVisibleAll[2].geoJsonIsVisible &&
                        <OshGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false} marker={customIcon}/>
                    }
                    {this.state.geoJsonIsVisibleAll[3].geoJsonIsVisible &&
                        <BatkenGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false} marker={customIcon}/>
                    }
                    {this.state.geoJsonIsVisibleAll[4].geoJsonIsVisible &&
                        <JalalAbadGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false} marker={customIcon}/>
                    }
                    {this.state.geoJsonIsVisibleAll[5].geoJsonIsVisible &&
                        <NarynGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false} marker={customIcon}/>
                    }
                    {this.state.geoJsonIsVisibleAll[6].geoJsonIsVisible &&
                        <IssykKolGeoJsonLayer url="kyrgyzstanPlaces.json" cluster={false} marker={customIcon}/>
                    }
                </MapContainer>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        type: state.attractions.type
    }
}
export default connect(mapStateToProps, null)(MapComponent)
