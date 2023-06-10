// import React, {useEffect, useState} from "react";
// import MarkerClusterGroup from "react-leaflet-markercluster";
// import {FeatureGroup, Marker, Popup} from "react-leaflet";
// import {getMarkerIcon} from "./MapIcon";
// import {Image} from "antd";
//
// export default function RegionMap({cluster, data}) {
//     let GroupComponent = cluster ? MarkerClusterGroup : FeatureGroup;
//     const [iconsLoaded, setIconsLoaded] = useState(false);
//
//     useEffect(() => {
//         // Загрузка всех необходимых иконок
//         const iconPromises = [
//             // Перечислите все типы, по которым требуется получить иконку
//             "lake",
//             "gorge",
//             "park",
//             "valley",
//             "theatre",
//             "museum",
//             "gallery",
//             "canyon",
//             "river",
//             "tower",
//             "place",
//             "circus",
//             "statue",
//             "philharmonic",
//             "mosque",
//             "mausoleum",
//             "nature park",
//             "waterfall",
//             "historical complex",
//             "mountain",
//             "cave",
//             "fortress",
//             "recreation area",
//             "nature reserves",
//             "pass",
//             "water reservoir"
//             // ... и так далее
//         ].map(type => {
//             return new Promise((resolve, reject) => {
//                 const icon = getMarkerIcon(type);
//                 if (icon) {
//                     // Если иконка найдена, установите обработчик события "load"
//                     icon.onload("load", () => resolve());
//                     // Если иконка не может быть загружена, установите обработчик события "error"
//                     icon.onerror("error", () => reject());
//                 } else {
//                     // Если иконка не найдена, вызовите reject()
//                     reject();
//                 }
//             });
//         });
//         // Ожидание загрузки всех иконок
//         Promise.all(iconPromises)
//             .then(() => setIconsLoaded(true))
//             .catch(() => setIconsLoaded(false));
//     }, []);
//
//     return (
//         <GroupComponent>
//             {iconsLoaded &&
//                 data.map(f => (
//                     <Marker
//                         key={f.properties.id}
//                         position={f.geometry.coordinate}
//                         icon={getMarkerIcon(f.properties.type)}
//                     >
//                         <Popup
//                             maxWidth={250}
//                             maxHeight={650}
//                             closeButton={true}
//                             className={"popup-fixed"}
//                             autoPan={true}
//                         >
//                             <div className="popup-info">
//                                 <Image
//                                     src={f.properties.image}
//                                     alt="photo of object"
//                                     className={"image-object"}
//                                 />
//                                 <p>
//                                     <span>Название: </span>
//                                     {f.properties.name}
//                                 </p>
//                                 <p>
//                                     <span>Местоположение: </span>
//                                     {f.properties.location}
//                                 </p>
//                                 <p>
//                                     <span>Описание: </span>
//                                     {f.properties.description}
//                                 </p>
//                             </div>
//                         </Popup>
//                     </Marker>
//                 ))}
//         </GroupComponent>
//     );
// }

import React, { useEffect, useState } from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { FeatureGroup, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import { Image } from "antd";
import lake from "../images/lake.png";
import gorge from "../images/daddys-gorges.png";
import mausoleum from "../images/agra.png";
import cave from "../images/cave.png";
import circus from "../images/circus-tent.png";
import pass from "../images/climbing.png";
import historicalComplex from "../images/evolution.png";
import fortress from "../images/fortress.png";
import gallery from "../images/gallery.png";
import canyon from "../images/grand-canyon.png";
import philharmonic from "../images/harp.png";
import natureReserves from "../images/massai-mara.png";
import mosque from "../images/mosque.png";
import mountain from "../images/mountain.png";
import museum from "../images/museum.png";
import park from "../images/park.png";
import naturePark from "../images/park (1).png";
import reservoir from "../images/reservoir.png";
import river from "../images/river.png";
import sculpture from "../images/sculpture.png";
import recreationArea from "../images/swimming-pool.png";
import theatre from "../images/theater.png";
import tower from "../images/tower.png";
import valley from "../images/valley.png";
import waterfall from "../images/waterfall.png";
import place from "../images/park (2).png";
import {getMarkerIcon} from "./MapIcon";

// export async function getMarkerIcon(type) {
//     const iconUrl = await getIconUrl(type);
//     if (iconUrl) {
//         return L.icon({
//             iconUrl: iconUrl,
//             iconSize: [32, 32],
//             iconAnchor: [16, 32],
//         });
//     } else {
//         console.log('null')
//         return null;
//     }
// }

// async function getIconUrl(type) {
//     switch (type) {
//         case 'lake':
//             return lake;
//         case 'gorge':
//             return gorge;
//         case 'mausoleum':
//             return mausoleum;
//         case 'cave':
//             return cave;
//         case 'circus':
//             return circus;
//         case 'pass':
//             return pass;
//         case 'historical complex':
//             return historicalComplex;
//         case 'fortress':
//             return fortress;
//         case 'gallery':
//             return gallery;
//         case 'canyon':
//             return canyon;
//         case 'philharmonic':
//             return philharmonic;
//         case 'nature reserves':
//             return natureReserves;
//         case 'mosque':
//             return mosque;
//         case 'mountain':
//             return mountain;
//         case 'museum':
//             return museum;
//         case 'park':
//             return park;
//         case 'nature park':
//             return naturePark;
//         case 'reservoir':
//             return reservoir;
//         case 'river':
//             return river;
//         case 'sculpture':
//             return sculpture;
//         case 'recreation area':
//             return recreationArea;
//         case 'theatre':
//             return theatre;
//         case 'tower':
//             return tower;
//         case 'valley':
//             return valley;
//         case 'waterfall':
//             return waterfall;
//         case 'place':
//             return place;
//         default:
//             return null;
//     }
// }

export default function RegionMap({ cluster, data }) {
    let GroupComponent = cluster ? MarkerClusterGroup : FeatureGroup;
    // const [iconsLoaded, setIconsLoaded] = useState(false);
    //
    // useEffect(() => {
    //     const loadIcons = async () => {
    //         const iconPromises = data.map((f) => getMarkerIcon(f.properties.type));
    //         try {
    //             await Promise.all(iconPromises);
    //             setIconsLoaded(true);
    //         } catch (error) {
    //             setIconsLoaded(false);
    //             console.error("Failed to load icons:", error);
    //         }
    //     };
    //
    //     loadIcons();
    // }, [data]);

    return (
        <GroupComponent>
            {/*{iconsLoaded &&*/}
            {data.map((f) => (
                    <Marker
                        key={f.properties.id}
                        position={f.geometry.coordinate}
                        // icon={getMarkerIcon(f.properties.type)}
                        icon={gorge}
                    >
                        <Popup
                            maxWidth={250}
                            maxHeight={650}
                            closeButton={true}
                            className={"popup-fixed"}
                            autoPan={true}
                        >
                            <div className="popup-info">
                                <Image
                                    src={f.properties.image}
                                    alt="photo of object"
                                    className={"image-object"}
                                />
                                <p>
                                    <span>Название: </span>
                                    {f.properties.name}
                                </p>
                                <p>
                                    <span>Местоположение: </span>
                                    {f.properties.location}
                                </p>
                                <p>
                                    <span>Описание: </span>
                                    {f.properties.description}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
        {/*}*/}
        </GroupComponent>
    );
}

