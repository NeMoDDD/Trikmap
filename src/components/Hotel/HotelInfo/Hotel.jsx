import s from './HotelInfo.module.css'    
import { Rate } from 'antd'
import  {Swiper,  SwiperSlide } from 'swiper/react';
import  {EffectFlip, Navigation, Pagination, A11y, } from 'swiper';
import 'swiper/css' 
import 'swiper/css/navigation';
import 'swiper/css/pagination';  
import { NavLink } from 'react-router-dom'; 
import Advantages from '../../common/Advantages'; 
import wifiIcon from '../../../assets/img/wifi_icon.png' 
import breakfastIcon from '../../../assets/img/breakFastIcon.png' 
import cleaningIcon from '../../../assets/img/cleaning_Icon.png' 
import iconAdress from '../../../assets/img/adressIcon.png'
import React from 'react';
const Hotel = React.memo(({item,...props}) =>{  
    
    return( 
        <>  
        <div className={s.hotel__row}> 
        <div className={`${s.hotel__item} ${s.hotel__swiper}`}> 
               

                 <Swiper 
                className={s.swiper__item}
                modules={[Navigation,EffectFlip, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation 
                pagination={{ clickable: true }}>
                    {item.photo.map((i,index) =><SwiperSlide key={index}><img className={s.img_slide} src={i} alt="PhotoOfHotel" /></SwiperSlide>)}
                </Swiper>
                
            </div> 
            <div className={`${s.hotel__item } ${s.hotel__main}`}>   
                <div className={s.hotel__main_container}>  
                <div className={s.hotel__description}> 
                    <div className={s.hotel__name}>{item.name}</div> 
                    <div className={s.hotel__stars}><Rate disabled value={item.rating}  /> </div>  
                </div> 
                <div className={s.hotel__text}>   
                    <div > <img src={iconAdress} alt="Icon of Address" /></div>
                    <div className={s.hotel__address}>{item.city}, {item.region}, {item.street}</div>
                </div>   
                <div className={s.border}></div>
                <div className={s.hotel__advantages}>  
                    {item.addvantages.wifi && <Advantages value={'WiFi'} img={wifiIcon}/>} 
                   {item.addvantages.wifi && <div className={s.hotel__box}> <Advantages value={'Бесплатное питание'} img={breakfastIcon}/></div>}  
                    {item.addvantages.wifi ? <Advantages value={'Ежедневная уборка'} img={cleaningIcon}/> : null} 
                </div>
            </div>  
                </div>

            <div className={`${s.hotel__item}  ${s.hotel__info}`}>  
                <div className={s.hotel__info_wrapper}> 
                    <div className={s.hotel__title}>{item.title} </div> 
                    <div><NavLink to={`/hotels/${item.name}`}><button className={s.hotel__btn}>Посмотреть</button></NavLink></div>
                </div>
            </div> 
        </div>
        
        </>
    )
} )
export default Hotel