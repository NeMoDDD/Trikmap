import React, { useState} from 'react';
import {motion} from 'framer-motion';
import Heart from '../../../../assets/img/DefaultHeart.svg';
import redHeart from '../../../../assets/img/redHeart.svg';
import s from './Wonder.module.css'
import Issyk from "../../../../assets/img/image 11.jpg";
import Sary from "../../../../assets/img/image 13.jpg";
import Soun from "../../../../assets/img/Сон-Куль-1 1.jpg";
import Ala from "../../../../assets/img/image 7.jpg";
import Fireplace from "../../../../assets/img/image 8.jpg";
import Waterfall from "../../../../assets/img/image 16.jpg";
import AlaArcha from "../../../../assets/img/image 6.jpg";
import JetiOguz from "../../../../assets/img/image 19.jpg";

export default  function Wonder(imageAlt) {

    const [heart, setHeart] = useState(false);
    const [images, setImages] = useState([
        {id: 0, status: false, imageUrl: Issyk, text: 'Озеро Иссык-Куль'},
        {id: 1, status: false, imageUrl: Sary, text: 'Озеро Сары-Челек'},
        {id: 2, status: false, imageUrl: Soun, text: 'Озеро Сон-Куль'},
        {id: 3, status: false, imageUrl: Ala, text: 'Озеро Ала-Куль'},
        {id: 4, status: false, imageUrl: Fireplace, text: 'Комлекс отдыха 12 коминов'},
        {id: 5, status: false, imageUrl: Waterfall, text: 'Водопад Слезы Барса'},
        {id: 6, status: false, imageUrl: AlaArcha, text: 'Ущелье Ала-Арча'},
        {id: 7, status: false, imageUrl: JetiOguz, text: 'Ущелье Джети-Огуз'}
    ]);
    const onLiked = (id) => {
        const likedItem = images.map((image) => {
            if (image.id === id) {
                return {...image, status: !image.status}
            }
            return image
        });

        setImages(likedItem);
    }


    return (
        <div className={s.main}>
            <div className={s.title}>
                <h1>Чудеса Кыргызстана</h1>
            </div>
            <div className={s.img}>
                {images.map((image, index) => (
                    <div key={index} className={s.column}>
                        <div className={s.heartBlock}>
                            {!image.status ? (
                                <button className={s.favourite} onClick={() => onLiked(image.id)}>
                                    <img className={s.favouriteImg} width={20} height={20} src={Heart}
                                         alt="icon heart"/>
                                </button>
                            ) : (
                                <div>
                                    <button className={s.favourite} onClick={() => onLiked(image.id)}>
                                        <img className={s.favouriteImg} width={20} height={20} src={redHeart}
                                             alt="icon heart"/>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div
                            className={s.imageWrapper}
                            // whileHover={{opacity: 0.8, backgroundColor: '#000'}}
                        >
                            <img
                                src={image.imageUrl}
                                alt={`${imageAlt} ${index + 1}`}
                                className={s.image}
                            />
                        </div>
                        <p>{image.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
