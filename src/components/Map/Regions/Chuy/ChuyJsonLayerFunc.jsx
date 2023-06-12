import React, {useState, useEffect} from 'react';
import "../../Map.css"
import RegionMap from "../../Helpers/RegionMap";

const fetchData = function fetchData(url, options) {
    let request = fetch(url, options);

    return request
        .then(r => r.json())
        .then(data => data);
}

export default function ChuyGeoJsonLayer({url, cluster}) {
    const [data, setData] = useState([]);
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

    return (
        <RegionMap cluster={false} data={data} marker={marker}/>
    );
}


