import style from "./Attraction.module.css"
import {Image, Skeleton} from 'antd';
import {ImageWithSkeleton} from "../Map/Helpers/RegionMap";

const Attraction = ({imgSrc, title, location, description}) => {
    return (
        <div className={style.attraction}>
            <ImageWithSkeleton src={imgSrc} alt={"Attraction image"} classNameBlock={style.imageBlock__attraction}
                               classNameImageSkeleton={style.attraction__img} classNameImage={style.attraction__img}
            />
            <div className={style.contentBlock__attraction}>
                <p><b>Название: </b>{title}</p>
                <p><b>Местотположение: </b>{location}</p>
                <p><b>Описание: </b>{description}</p>

            </div>
        </div>
    )
}

export default Attraction