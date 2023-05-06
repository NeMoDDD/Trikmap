import { NavLink } from 'react-router-dom';
import s from './OrderHotel.module.css'
 
const OrderHotel = (props) =>{  
    return(  
        <div className={s.hotel}>  
       <NavLink to={'/hotels/'}>Назад</NavLink>
            <div className={s.hotel__container}> 
                <div className={s.hotel__name}>{props.orderingHotel.name}</div>
                <div className={s.hotel__rating}>{props.orderingHotel.rating} </div>
                <div className={s.hotel__address}> 
                    {props.orderingHotel.city}
                 </div>
                <div className={s.hotel__imgages}> 
                    <div className={s.hotel__main_img}><img src="" alt="" /></div> 
                </div> 
                <div className={s.hotel__description}>{props.orderingHotel.subtitle}</div> 
                <div className={s.hotel__addvantages}></div>
                <div></div>
            </div>
        </div>
    )
}  
export default OrderHotel
