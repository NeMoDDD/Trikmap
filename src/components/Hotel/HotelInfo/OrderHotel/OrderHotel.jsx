import { NavLink,Link} from 'react-router-dom';
import s from './OrderHotel.module.css'
import Advantages from '../../../common/Advantages'; 
import wifiIcon from '../../../../assets/img/wifi_icon.png' 
import breakfastIcon from '../../../../assets/img/breakFastIcon.png' 
import cleaningIcon from '../../../../assets/img/cleaning_Icon.png' 
import iconAdress from '../../../../assets/img/adressIcon.png' 
import { LeftOutlined } from '@ant-design/icons'; 
import { Rate } from 'antd';
import OrderMap from './OrderMap';  

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";  
//import "./style.css";

import { FreeMode, Navigation, Thumbs } from "swiper"; 
import CommentContainer from './CommentsHotel/CommentContainer';



const OrderHotel = React.memo(({orderingHotel, coordinates,...props}) =>{    
    return(   
        <div className={s.hotel}>  
        <div className={s.hotel__container}> 
            <div className={s.hotel__nav}>   
            <LeftOutlined />
            <NavLink className={s.nav__link} to={'/hotels/'}>Назад</NavLink> 
            </div>
            <div className={s.hotel__item}>   
            <div className={s.hotel__main}> 
                <div className={s.hotel__name}>{orderingHotel.name}</div>
                <div className={s.hotel__rating}><Rate disabled value={props.currentRating}  /> </div>
            </div>
                 
                 <div className={s.hotel__info}>   
                    <div className={s.hotel__address_inner}> 
                    <div> <img src={iconAdress} alt="Icon of Address" /></div>
                    <div className={s.hotel__address}>{orderingHotel.city}, {orderingHotel.region}, {orderingHotel.street}</div>
                    </div>
                 </div>
                 
                <div className={s.hotel__swipet_wrapper}>
                     
                {orderingHotel?.photo &&<div className={s.hotel__imgages}> <Swiper className={s.hotel__swiper_big}navigation={true} 
                spaceBetween={30}
                modules={[FreeMode, Navigation, Thumbs]}> 
                    {orderingHotel.photo.map((item,index) => <SwiperSlide key={index}><img src={item} className={s.swiper__img} alt='Hotel'/></SwiperSlide>)}  

                </Swiper> 
                </div>}
                </div>
                
                 
                 <div className={s.hotel__description}>  
                    <div className={s.hotel__description_title}>Описание</div>
                    <div className={s.hotel__description_subtitle}>{orderingHotel.subtitle} </div>
                 </div> 
                 <div className={s.hotel__order}> 
                    <div className={s.hotel__order_wrapper}> 
                    <Link className={s.order_link} to={orderingHotel.booking}><button className={s.order_btn}>Забронировать на Booking</button></Link> 
                    <Link target='_blank' className={s.order_link} to={`/hotels/${orderingHotel.name}/order`}><button className={s.order_btn}>Забронировать у нас</button></Link>
                    </div>
                 </div>
                 <div className={s.hotel__addvantages}>   
                    <div className={s.hotel__addvantages_title}>Удобства</div>
                    <div className={s.hotel__addvantages_inner}>  
                    
                    {orderingHotel.addvantages?.wifi && <Advantages value={'WiFi'} img={wifiIcon}/>} 
                    {orderingHotel.addvantages?.freebreakfast && <div className={s.hotel__box}> <Advantages value={'Бесплатное питание'} img={breakfastIcon}/></div>}  
                    {orderingHotel.addvantages?.cleaning ? <Advantages value={'Ежедневная уборка'} img={cleaningIcon}/> : null}  
                    </div>
                </div>  
                {coordinates.length > 0 && <div className={s.hotel__map}>   
                    <OrderMap  lon={coordinates[0].lon} lat={coordinates[0].lat}/> 
                </div>} 
                <div className={s.hotel__comments}> 
                    <CommentContainer hotel={orderingHotel.name}/>
                </div>
            </div>
        </div>
        </div>
    )
}  )
export default OrderHotel
