import React from 'react'
import s from './LandMarks.module.css';
import Museum from '../../../../assets/img/Музеи.jpg'
import Park from '../../../../assets/img/Парки.jpg';
import Memorial from '../../../../assets/img/Памятники.jpg';


export default function LandMarks() {
    const images = [
        {imageUrl: Museum, text: 'Музеи'}, 
        {imageUrl: Park, text: 'Парки'}, 
        {imageUrl: Memorial, text: 'Памятники'}, 
    ]
  return (
    <div className={s.main}>
        <div className={s.title}> 
        <h2>Достопримечательности</h2>
        </div>
        <div className={s.img_block}>
            {images.map((image,index) =>(
                <div key={index}>
                    <img key={index} src= {image.imageUrl} alt={` ${index + 1}`}></img>
                    <p>{image.text}</p>

                </div>
            ))}
        </div>
    </div>
  )
}
