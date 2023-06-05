import s from './Tours.module.css'    
import { NavLink } from 'react-router-dom'
const Tour = ({title,date,...props}) =>{ 
    return( 
        <div className={s.tour__about}> 
            <div className={s.about__item}> 
                <div className={s.about__title}>{title}</div>  
                <div className={s.about__date}> 
                    {/* <ul> 
                        <li className={s.about__list}>Даты:</li> 
                        {date.map((item, key) => <li key={key+item}> {item} </li> )} 
                    </ul>  */}
                </div> 
                <div className={s.about__btn}> 
                    <button><NavLink to={`/tours/${title}`}></NavLink></button>
                </div>
            </div>
        </div>
    )
} 
export default Tour