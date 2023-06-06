import s from './Tours.module.css'    
import { NavLink } from 'react-router-dom'
const Tour = ({tour,...props}) =>{ 
    return( 
        <div style={{backgroundImage: `url(${tour.photo[0]})`}} className={s.tour__about}> 
            <div className={s.about__item}>   
 

                <div className={s.about__title}>{tour.title}</div>  
                <div className={s.about__date}> 
                    <ul> 
                        <li className={s.about__list}>Даты:</li> 
                        {tour.data.map((item, key) => <li  key={key+item} className={s.about__list}> {item} </li> )} 
                    </ul> 
                </div> 
                <div className={s.about__btn}> 
                    <button className={s.about__button}><NavLink to={`/tours/${tour.title}`}>Подробнее</NavLink></button>
                </div>
                </div>
            </div>
    )
} 
export default Tour