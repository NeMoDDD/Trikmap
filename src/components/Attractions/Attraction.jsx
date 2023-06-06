import style from "./Attraction.module.css"
import { Image, Skeleton} from 'antd';

const Attraction = ({imgSrc, title, location, description}) => {
    return (
        <div className={style.attraction}>
            <div className={style.imageBlock__attraction}>
                <Image
                    className={style.attraction__img} src={imgSrc} alt="Attraction image"
                />
            </div>
            <div className={style.contentBlock__attraction}>
                <p><b>Название: </b>{title}</p>
                <p><b>Местотположение: </b>{location}</p>
                <p><b>Описание: </b>{description}</p>

            </div>
        </div>
    )
}

export default Attraction