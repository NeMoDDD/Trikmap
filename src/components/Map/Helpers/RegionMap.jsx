import React, {useEffect, useState} from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";
import {FeatureGroup, Marker, Popup} from "react-leaflet";
import {getMarkerIcon} from "./MapIcon";
import {Image} from "antd";

export default function RegionMap({cluster, data, marker}) {
    let GroupComponent = cluster ? MarkerClusterGroup : FeatureGroup;

    return (
        <GroupComponent>
            {data.map(f => (
                    <Marker
                        key={f.properties.id}
                        position={f.geometry.coordinate}
                        // icon={getMarkerIcon(f.properties.type)}
                        icon={marker}
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
        </GroupComponent>
    );
}
