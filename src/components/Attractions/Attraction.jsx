import style from "./Attraction.module.css"
const Attraction = ({imgSrc, title, location, description}) => {
    console.log(imgSrc)
    return (
        <div className={style.attraction}>
            <div>
                <img className={style.attraction__img} src={imgSrc} alt="Attraction image"/>
            </div>
            <div>
                <h2>Название: {title}</h2>
                <p>Местотположение: {location}</p>
                <p>Описание: {description}</p>

            </div>
        </div>
    )
}

export default Attraction