import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useDispatch, useSelector} from "react-redux"
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import s from './LandMarks.module.css';
import Museum from '../../../../assets/img/Музеи.jpg';
import Park from '../../../../assets/img/Парки.jpg';
import Memorial from '../../../../assets/img/Памятники.jpg';
import {setType} from "../../../store/slices/attractionsSlice";
import {useNavigate} from "react-router-dom";


const NavLinkMotion = motion(NavLink);

export default function LandMarks() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const push = useNavigate()
    const {type} = useSelector(state => state.attractions)

    const images = [
        {imageUrl: Museum, text: 'Музеи', type: "museum"},
        {imageUrl: Park, text: 'Парки', type: "park"},
        {imageUrl: Memorial, text: 'Памятники', type: "statue"},
    ];
    const dispatch = useDispatch()

    const setTypeImg = (imageType) => {
        dispatch(setType({type: imageType}))
        push("/attractions")
    }

    return (
        <Slider {...settings}>
        <div className={s.main}>
            <div className={s.title}>
                <h2>Достопримечательности</h2>
            </div>
            <div className={s.img_block}>
                {images.map((image, index) => (
                    <div key={index}>
                        <motion.div
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.3}}
                        >
                            <img
                                onClick={() => setTypeImg(image.type)}
                                key={index}
                                src={image.imageUrl}
                                alt={`${index + 1}`}
                            />
                        </motion.div>
                        <p onClick={() => {
                            console.log(type)
                        }}>{image.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </Slider>
    );
}
