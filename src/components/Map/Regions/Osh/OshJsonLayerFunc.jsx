import React, { useState, useEffect} from 'react';
import { Marker, FeatureGroup, Popup } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";

const fetchData = function fetchData(url, options) {
    let request = fetch(url, options);

    return request
        .then(r => r.json())
        .then(data => data);
}

export default function OshGeoJsonLayer ({url, cluster}) {
    const [data, setData] = useState([]);
    useEffect(()=> {
        if (url) {
            const abortController = new AbortController();

            fetchData(url, { signal: abortController.signal }).then(data => {
                setData(data.osh);
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
                    position={f.geometry.coordinate.reverse()}
                >
                    <Popup minWidth={200} closeButton={false}>
                        <div style={{backgroundColor:"red", color:"white"}}>
                            <p>{f.properties.name}</p>
                            <p>{f.properties.description}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </GroupComponent>
    );
}
