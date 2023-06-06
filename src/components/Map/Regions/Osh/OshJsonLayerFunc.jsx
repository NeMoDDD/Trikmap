// import React, { useState, useEffect} from 'react';
// import { Marker, FeatureGroup, Popup } from 'react-leaflet';
// import MarkerClusterGroup from "react-leaflet-markercluster";
// import "../../Map.css"
// const fetchData = function fetchData(url, options) {
//     let request = fetch(url, options);

//     return request
//         .then(r => r.json())
//         .then(data => data);
// }

// export default function OshGeoJsonLayer ({url, cluster}) {
//     const [data, setData] = useState([]);
//     useEffect(()=> {
//         if (url) {
//             const abortController = new AbortController();

//             fetchData(url, { signal: abortController.signal }).then(data => {
//                 setData(data.osh);
//             });
//             // cancel fetch on component unmount
//             return () => {
//                 abortController.abort();
//             };
//         }

//     }, [url]);

//     let GroupComponent = cluster ? MarkerClusterGroup : FeatureGroup;

//     // console.info()
//     return (
//         <GroupComponent>
//             {data.map(f => (
//                 <Marker
//                     key={f.properties.id}
//                     position={f.geometry.coordinate.reverse()}
//                 >
//                     <Popup
//                         maxWidth={250}
//                         maxHeight={650}
//                         closeButton={true}
//                         className={'popup-fixed'}
//                         autoPan={false}>
//                         <div className="popup-info">
//                             <img src={f.properties.image} alt="photo of object" className={"image-object"}/>
//                             <p><span>Название: </span>{f.properties.name}</p>
//                             <p><span>Местоположение: </span>{f.properties.location}</p>
//                             <p><span>Описание: </span>{f.properties.description}</p>
//                         </div>
//                     </Popup>
//                 </Marker>
//             ))}
//         </GroupComponent>
//     );
// }
