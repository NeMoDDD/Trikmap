import React from "react";
import MapComponent from "./components/Map/Json/MapGeoJsonMarkers";
import {Navigate} from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <MapComponent/>
            <Navigate to="/login"/>
        </div>
    )
}

export default HomePage;