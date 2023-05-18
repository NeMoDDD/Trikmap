import s from './HotelInfo.module.css'    

import  {Swiper,  SwiperSlide } from 'swiper/react';
import  {EffectFlip, Navigation, Pagination, A11y, } from 'swiper';
import 'swiper/css' 
import 'swiper/css/navigation';
import 'swiper/css/pagination';  
import { Spinner } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
 


 const Hotel = props => { 
    const lastPostIndex = props.currentPage * props.pageSize; 
    const firstPostIndex = lastPostIndex - props.pageSize
    const data = props.hotels.slice( firstPostIndex, lastPostIndex)

    if(props.isFetch){ 
        return(  
            <div className={s.spinner} > 
            <Spinner className={s.spin} color='blue' colorScheme='cyan'/>
            </div>
        )
    }
    
    return( 
       <div className={s.hotel}>   
        
         {data.map((item) => {  
            return (<div className={s.hotel__row}> 
            <div className={`${s.hotel__item} ${s.hotel__swiper}`}> 
            <Swiper 
            className={s.swiper__item}
            modules={[Navigation,EffectFlip, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation 
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
       {item.photo.map(i =><SwiperSlide><img className={s.img_slide} src={i} alt="PhotoOfHotel" /></SwiperSlide>)}
      </Swiper>
            </div> 
            <div className={`${s.hotel__item } ${s.hotel__main}`}> 
                <div className={s.hotel__text}> 
                    <div className={s.hotel__name}>{item.name}</div> 
                    <div> 
                    <div className={s.hotel__stars}>Рейтинг: {item.rating} / 5 </div>  
                    <div className={s.hotel__address}>Город: {item.city}</div>
                    <div className={s.hotel__address}>Область: {item.region}</div>
                    <div className={s.hotel__address}>Улица:  {item.street}</div> 
                    <div className={s.hotel__advantages}>{item.addvantages.wifi ? <p>Wifif</p> : null}</div> 
                    </div>
                </div> 
            </div> 
            <div className={`${s.hotel__item}  ${s.hotel__info}`}>  
                <div className={s.hotel__info_wrapper}> 
                    <div className={s.hotel__title}>{item.title} </div> 
                    <div><button className={s.hotel__btn}><NavLink to={`/hotels/${item.name}`}>Посмотреть</NavLink></button></div>
                </div>
            </div> 
        </div>)
        })}
       </div>  

    )
} 
export default Hotel
            