import React from "react"
import s from './Define.module.css'
import { Image, Rate } from "antd"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";   
import { FreeMode, Navigation, Thumbs } from "swiper"; 
import { Link } from "react-router-dom"; 
import CommentTourContainer from './commentTOur/CommentTourContainer'
const DefineTour = React.memo(({ tour, currentRate }) => {
    return (  
        <>
        {tour?.photo && (<div className={s.tour}>

        <div style={{ backgroundImage: `url(${tour?.photo[0]})` }} className={s.content}> 
            <div className={s.content__wrapper}> 

            <div className={s.content__item}>
                <div className={s.content__item_wrapper}> 
                <div className={s.content__description}>{tour.title}</div>  
                <div className={s.content__rate}><Rate disabled value={currentRate}/> </div>
                </div>
                <div className={s.content__data}> 
                 <ul> 
                {tour.data.map((item,key) => <li className={s.link_data} key={key}>{item}</li>)}
 
                 </ul>
                 </div>
            </div>
            </div>
        </div>

        <div className={s.map}>
            <div className={s.map__container}>
                <div className={s.map__title}>Нитка маршрута</div>
                <div className={s.map__rope}>{tour.places}</div>
            </div>
        </div>

        <div className={s.route}>
            <div className={s.route__container}>
                <div className={s.route__map}><Image className={s.map__img} src={tour.map} alt="" /></div>
                <div className={s.route__title}> {tour.subtitle}</div>
            </div>
        </div>  

        <div className={s.tour__swiper_wrapper}>
            <div className={s.swiper__description}>Места, где вы побываете</div>
            {tour?.photo &&<div className={s.tour__imgages}> <Swiper className={s.tour__swiper_big}navigation={true} 
            spaceBetween={30}
            modules={[FreeMode, Navigation, Thumbs]}> 
                {tour.photo.map((item,index) => <SwiperSlide key={index}><img src={item} className={s.swiper__img} alt='Hotel'/></SwiperSlide>)}  

            </Swiper> 
            </div>}
            </div>

        <div className={s.plan}> 
            <div className={s.plan__container}>  
                <div className={s.plan__description}>Программа по дням</div>
                {tour.plan.map((item,index) => <div className={s.plan__item}> 
                    <div className={s.plan__title}>День {index+1}. </div>
                    <div className={s.plan__subtitle}>{item}</div>
                 </div>)}
            </div>
        </div>  

        <div className={s.details} > 
                <div className={s.details__description}> 
                    Детали тура
                </div>
            <div className={s.details__container}>  
                <div className={s.details__row}> 
                    <div className={s.details__title}>В стоимость входят:</div> 
                    <ul className={s.details__list}> 
                        {tour.entire.map((item,index) => <li className={s.details__link} key={index}>{item}</li>)}
                    </ul>
                </div> 
                <div className={s.details__row}> 
                <div className={s.details__title}>Рекомендуемая одежда:</div> 
                    <ul className={s.details__list}> 
                        {tour.clothes.map((item,index) => <li className={s.details__link} key={index}>{item}</li>)}
                    </ul></div>
            </div>
        </div> 

        <div className={s.order}> 
            <div className={s.order__description}> Забронировать тур</div>
            <div className={s.order__container}> 
                <Link  to={`/tours/${tour.title}/order`} className={s.order__link}><button>Забронировать у нас</button></Link> 
                <Link  target='_blank' to={tour.book} className={s.order__link}><button>Забронировать у Daina-Tour</button></Link>
            </div>
        </div> 
            
        <div className={s.commetns}> 
            <CommentTourContainer tour={tour.title}/>
        </div>

    </div>)}
        </>
    )
})
export default DefineTour