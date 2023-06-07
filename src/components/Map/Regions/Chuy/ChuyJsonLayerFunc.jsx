import React, {useState, useEffect} from 'react';
import {Marker, FeatureGroup, Popup} from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import "../../Map.css"
import {Image} from "antd";
import lake from "../../images/lake.png"
import gorge from "../../images/daddys-gorges.png"
import mausoleum from "../../images/agra.png"
import cave from "../../images/cave.png"
import circus from "../../images/circus-tent.png"
import pass from "../../images/climbing.png"
import historicalComplex from "../../images/evolution.png"
import fortress from "../../images/fortress.png"
import gallery from "../../images/gallery.png"
import canyon from "../../images/grand-canyon.png"
import philharmonic from "../../images/harp.png"
import natureReserves from "../../images/massai-mara.png"
import mosque from "../../images/mosque.png"
import mountain from "../../images/mountain.png"
import museum from "../../images/museum.png"
import park from "../../images/park.png"
import naturePark from "../../images/park (1).png"
import reservoir from "../../images/reservoir.png"
import river from "../../images/river.png"
import sculpture from "../../images/sculpture.png"
import recreationArea from "../../images/swimming-pool.png"
import theatre from "../../images/theater.png"
import tower from "../../images/tower.png"
import valley from "../../images/valley.png"
import waterfall from "../../images/waterfall.png"
import place from "../../images/park (2).png"


const fetchData = function fetchData(url, options) {
    let request = fetch(url, options);

    return request
        .then(r => r.json())
        .then(data => data);
}

export default function ChuyGeoJsonLayer({url, cluster, marker}) {
    const [data, setData] = useState([]);
    const lakeMarkerIcon = L.icon({
        iconUrl: lake,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const gorgeMarkerIcon = L.icon({
        iconUrl: gorge,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const mausoleumMarkerIcon = L.icon({
        iconUrl: mausoleum,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const caveMarkerIcon = L.icon({
        iconUrl: cave,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const circusMarkerIcon = L.icon({
        iconUrl: circus,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const passMarkerIcon = L.icon({
        iconUrl: pass,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const historicalComplexMarkerIcon = L.icon({
        iconUrl: historicalComplex,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const fortressMarkerIcon = L.icon({
        iconUrl: fortress,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const galleryMarkerIcon = L.icon({
        iconUrl: gallery,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const canyonMarkerIcon = L.icon({
        iconUrl: canyon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const philharmonicMarkerIcon = L.icon({
        iconUrl: philharmonic,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const natureReservesMarkerIcon = L.icon({
        iconUrl: natureReserves,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const mosqueMarkerIcon = L.icon({
        iconUrl: mosque,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const mountainMarkerIcon = L.icon({
        iconUrl: mountain,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const museumMarkerIcon = L.icon({
        iconUrl: museum,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const parkMarkerIcon = L.icon({
        iconUrl: park,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const natureParkMarkerIcon = L.icon({
        iconUrl: naturePark,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const reservoirMarkerIcon = L.icon({
        iconUrl: reservoir,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const riverMarkerIcon = L.icon({
        iconUrl: river,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const sculptureMarkerIcon = L.icon({
        iconUrl: sculpture,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const recreationAreaMarkerIcon = L.icon({
        iconUrl: recreationArea,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const theatreMarkerIcon = L.icon({
        iconUrl: theatre,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const towerMarkerIcon = L.icon({
        iconUrl: tower,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const valleyMarkerIcon = L.icon({
        iconUrl: valley,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const waterfallMarkerIcon = L.icon({
        iconUrl: waterfall,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    const placeMarkerIcon = L.icon({
        iconUrl: place,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    function getMarkerIcon(type) {
        switch (type) {
            case 'lake':
                return lakeMarkerIcon;
            case 'gorge':
                return gorgeMarkerIcon;
            case 'park':
                return parkMarkerIcon;
            case 'valley':
                return valleyMarkerIcon;
            case 'theatre':
                return theatreMarkerIcon;
            case 'museum':
                return museumMarkerIcon;
            case 'gallery':
                return galleryMarkerIcon;
            case 'canyon':
                return canyonMarkerIcon;
            case 'river':
                return riverMarkerIcon;
            case 'tower':
                return towerMarkerIcon;
            case 'place':
                return placeMarkerIcon;
            case 'circus':
                return circusMarkerIcon;
            case 'statue':
                return sculptureMarkerIcon;
            case 'philharmonic':
                return philharmonicMarkerIcon;
            case 'mosque':
                return mosqueMarkerIcon;
            case 'mausoleum':
                return mausoleumMarkerIcon;
            case 'nature park':
                return natureParkMarkerIcon;
            case 'waterfall':
                return waterfallMarkerIcon;
            case 'historical complex':
                return historicalComplexMarkerIcon;
            case 'mountain':
                return mountainMarkerIcon;
            case 'cave':
                return caveMarkerIcon;
            case 'fortress':
                return fortressMarkerIcon;
            case 'recreation area':
                return recreationAreaMarkerIcon;
            case 'nature reserves':
                return natureReservesMarkerIcon;
            case 'pass':
                return passMarkerIcon;
            case 'water reservoir':
                return reservoirMarkerIcon;
            default:
                return null;
        }
    }
    useEffect(() => {
        if (url) {
            const abortController = new AbortController();

            fetchData(url, {signal: abortController.signal}).then(data => {
                setData(data.chuy);
            });
            // cancel fetch on component unmount
            return () => {
                abortController.abort();
            };
        }

    }, [url]);

    let GroupComponent = cluster ? MarkerClusterGroup : FeatureGroup;

    // console.info()
    return (
        <GroupComponent>
            {data.map(f => (
                <Marker
                    key={f.properties.id}
                    position={f.geometry.coordinate}
                    icon={getMarkerIcon(f.properties.type)}
                >
                    <Popup
                        maxWidth={250}
                        maxHeight={650}
                        closeButton={true}
                        className={'popup-fixed'}
                        autoPan={true}>
                        <div className="popup-info">
                            <Image src={f.properties.image} alt="photo of object" className={"image-object"}/>
                            <p><span>Название: </span>{f.properties.name}</p>
                            <p><span>Местоположение: </span>{f.properties.location}</p>
                            <p><span>Описание: </span>{f.properties.description}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </GroupComponent>
    );
}
