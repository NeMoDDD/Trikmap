import React, { useEffect, useState } from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { FeatureGroup, Marker, Popup } from "react-leaflet";
import { getMarkerIcon } from "./MapIcon";
import { Skeleton } from "antd";

export default function RegionMap({ cluster, data, marker }) {
    let GroupComponent = cluster ? MarkerClusterGroup : FeatureGroup;

    return (
        <GroupComponent>
            {data.map((f) => (
                <Marker
                    key={f.properties.id}
                    position={f.geometry.coordinate}
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
                            <ImageWithSkeleton src={f.properties.image} alt="photo of object" classNameBlock={"image-block"}
                                               classNameImageSkeleton={"image-object-skeleton"} classNameImage={"image-object"}
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

// Компонент ImageWithSkeleton, который отображает скелетную анимацию при загрузке изображения
export const ImageWithSkeleton = ({ src, alt, classNameBlock, classNameImageSkeleton, classNameImage}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.onload = () => {
            setIsLoading(false);
        };
    }, [src]);

    return (
        <div className={classNameBlock}>
            {isLoading ? (
                <Skeleton.Image active={true} size="large" className={classNameImageSkeleton}/>
            ) : (
                <img src={src} alt={alt} className={classNameImage}/>
            )}
        </div>
    );
};
