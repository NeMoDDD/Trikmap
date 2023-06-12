import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Museum from "../../../../../assets/img/Музеи.jpg";
import Park from "../../../../../assets/img/Парки.jpg";
import Gorge from "../../../../../assets/img/Gorge.jpg";
import Valley from '../../../../../assets/img/Valley.jpg';
import Theatre from '../../../../../assets/img/Theatre.jpg'
import Gallery from '../../../../../assets/img/Gallery.jpg';
import Canyon from '../../../../../assets/img/Canyon.jpg';
import Lake from '../../../../../assets/img/Lakes.jpg';
import River from '../../../../../assets/img/River.jpg';
import Tower from '../../../../../assets/img/Tower.jpg';
import Place from '../../../../../assets/img/Place.jpg';
import Circus from '../../../../../assets/img/Circus.jpg';
import Statue from '../../../../../assets/img/Statue.jpg';
import Philarmonic from '../../../../../assets/img/Philarmonic.jpg';
import Mosque from '../../../../../assets/img/Mosque.jpg';
import Mausoleum from  '../../../../../assets/img/Mausoleum.jpg';
import NaturePark from '../../../../../assets/img/NaturePark.jpg';
import Waterfall from '../../../../../assets/img/Waterfall.jpg';
import HistoricalComplex from '../../../../../assets/img/HistoricalComplex.jpg';
import Mountain from '../../../../../assets/img/Mountain.jpg';
import Cave from '../../../../../assets/img/Cave.jpg';
import Fortress from '../../../../../assets/img/Fortress.jpg';
import RecreationArea from '../../../../../assets/img/ReacreationArea.jpg';
import NatureReserve from '../../../../../assets/img/NatureReserves.jpg';
import Pass from '../../../../../assets/img/Pass.jpg'
import WaterReservoir from '../../../../../assets/img/WaterReservoir.jpg'

import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {setType} from "../../../../store/slices/attractionsSlice";
import s from "../LandMarks.module.css";

const Slider =  () => {
    const push = useNavigate();
    const { type } = useSelector((state) => state.attractions);
    const images = [
        { imageUrl: Park, text: 'Парки', type: 'park' },
        { imageUrl: Gorge, text: 'Ущелья', type: 'gorge' },
        { imageUrl: Valley, text: 'Долины', type: 'valley' },
        { imageUrl: Theatre, text: 'Театры', type: 'theatre' },
        { imageUrl: Museum, text: 'Музеи', type: 'museum' },
        { imageUrl: Gallery, text: 'Галлереи', type: 'gallery' },
        { imageUrl: Canyon, text: 'Каньоны', type: 'canyon' },
        { imageUrl: Lake, text: 'Озера', type: 'lake' },
        { imageUrl: River, text: 'Реки', type: 'river' },
        { imageUrl: Tower, text: 'Башни', type: 'tower' },
        { imageUrl: Place, text: 'Площади', type: 'place' },
        { imageUrl: Circus, text: 'Цирки', type: 'circus' },
        { imageUrl: Statue, text: 'Статуи', type: 'statue' },
        { imageUrl: Philarmonic, text: 'Филармонии', type: 'philharmonic' },
        { imageUrl: Mosque, text: 'Мечети', type: 'mosque' },
        { imageUrl: Mausoleum, text: 'Мавзолеи', type: 'mausoleum' },
        { imageUrl: NaturePark, text: 'Национальные парки', type: 'nature park' },
        { imageUrl: Waterfall, text: 'Водопады', type: 'waterfall' },
        { imageUrl: HistoricalComplex, text: 'Исторические комплексы', type: 'historical complex' },
        { imageUrl: Mountain, text: 'Горы', type: 'mountain' },
        { imageUrl: Cave, text: 'Пещеры', type: 'cave' },
        { imageUrl: Fortress, text: 'Крепости', type: 'fortress' },
        { imageUrl: RecreationArea, text: 'Зоны отдыха', type: 'recreation area' },
        { imageUrl: NatureReserve, text: 'Природные заповедники', type: 'nature reserves' },
        { imageUrl: Pass, text: 'Перевалы', type: 'pass' },
        { imageUrl: WaterReservoir, text: 'Водохранилища', type: 'water reservoir' },
    ];
    const dispatch = useDispatch();

    const setTypeImg = (imageType) => {
        dispatch(setType({ type: imageType }));
        push('/attractions');
    };

    return (
        <div className={s.main}>
        <div className={s.title}>
            <h2>Достопримечательности</h2>
        </div>
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                images.map(image =>{
                    return(
                        <SwiperSlide>
                            <img className={s.img} onClick={() => setTypeImg(image.type)} src={image.imageUrl} alt = 'Достопримечательности'/>
                            <p onClick={() => { console.log(type) }}>{image.text}</p>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </div>
    );
};
export default Slider