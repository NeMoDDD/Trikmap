import { Rate } from 'antd'
import s from './Tours.module.css'    
import { NavLink } from 'react-router-dom'
const Tour = ({tour,...props}) =>{ 
    return(  
        <div className={s.tour__inner_wrapper}> 

        <div style={{backgroundImage: `url(${tour.photo[0]}), -webkit-linear-gradient(top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))` }} className={s.tour__about}> 
            <div className={s.about__item}>   
                <div className={s.about__title}>{tour.title}</div>   
                <div className={s.about__rate}><Rate disabled value={tour.rating}/></div>
                <div className={s.about__date}> 
                    <ul> 
                        <li className={s.about__list}>Даты:</li> 
                        {tour.data.map((item, key) => <li  key={key+item} className={s.about__list}> {item} </li> )}  
                    </ul> 
                </div> 
                <div className={s.about__btn}> 
                    <NavLink className={s.about__link} to={`/tours/${tour.title}`}><button className={s.about__button}>Подробнее</button></NavLink>
                </div>
                </div>
            </div>
        </div>
    )
} 
export default Tour