import s from './HotelInfo.module.css'    
import { Rate } from 'antd'
import  {Swiper,  SwiperSlide } from 'swiper/react';
import  {EffectFlip, Navigation, Pagination, A11y, } from 'swiper';
import 'swiper/css' 
import 'swiper/css/navigation';
import 'swiper/css/pagination';  
import { NavLink } from 'react-router-dom'; 
import Advantages from '../../common/Advantages';
const Hotel = ({item,...props}) =>{  

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
                    <div className={s.hotel__address}>{item.city}, {item.region}, {item.street}</div>
                </div>   
                <div className={s.border}></div>
                <div className={s.hotel__advantages}> 
                    {item.addvantages.wifi ? <Advantages value={'WiFi'} img={'https://cdn-icons-png.flaticon.com/512/748/748151.png'}/> : null}
                </div>
            </div>  
                </div>

            <div className={`${s.hotel__item}  ${s.hotel__info}`}>  
                <div className={s.hotel__info_wrapper}> 
                    <div className={s.hotel__title}>{item.title} </div> 
                    <div><button className={s.hotel__btn}><NavLink to={`/hotels/${item.name}`}>Посмотреть</NavLink></button></div>
                </div>
            </div> 
        </div>
        
        </>
    )
} 
export default Hotel