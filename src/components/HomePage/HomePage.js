import React from "react";
import MapComponent from "../Map/Json/MapGeoJsonMarkers";
import {Navigate, NavLink} from "react-router-dom"
import {useAuth} from "../Authorization/hooks/use-auth";
import style from "./HomePage.module.css"

const HomePage = () => {
    const {isAuth} = useAuth()
    return (
        <div className={style.home_main}>
            {isAuth ?
                <div>
                    <h3>Home</h3>
                    <NavLink to={'/attractions'}>Достопримечательности</NavLink>
                    <MapComponent/>
                </div> : <Navigate to={"/login"}/>
            }
        </div>
)
}

export default HomePage;