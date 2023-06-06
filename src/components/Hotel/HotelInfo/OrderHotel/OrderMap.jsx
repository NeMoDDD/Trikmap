import { MapContainer,TileLayer, Marker } from "react-leaflet"
import  React,{ useState, useRef } from "react";
import s from './OrderHotel.module.css'  
import "leaflet/dist/leaflet.css"; 
import L from 'leaflet'
import marker from '../../../../assets/img/marker.png' 
const customIcon = L.icon({
    iconUrl: marker,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
   });  
const OrderMap = React.memo((props) =>{  
    const ZOOM_LEVEL = 20.5;
    const mapRef = useRef();  
    const mapSettings = { 
        maptiler: {
            url: "https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=Aj1TQCAemuMEEZnv0GsR",
            attribution: '&copy; <a href="#">IT Academy</a>',
          },
    } 
    const [center] = useState({
        map: 15,
        lat: props.lat,
        lng: props.lon,
      });
    return( 
        <>   
        <MapContainer className={s.map} center={center}  zoom={ZOOM_LEVEL} ref={mapRef}>
             <TileLayer 
              url={mapSettings.maptiler.url}
              attribution={mapSettings.maptiler.attribution}
            />   
            <Marker icon={customIcon} position={[center.lat, center.lng]}/>
          </MapContainer>
        </>
    )
} )
export default OrderMap