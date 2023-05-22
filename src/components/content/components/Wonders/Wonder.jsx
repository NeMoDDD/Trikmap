import React from 'react'
import s from '../wonders/Wonder.module.css'
export default function Wonder({images, imageAlt}) {

  return (
    <div className={s.main}>
        <div className={s.title}>
            <h1>Чудеса Кыргызстана</h1>
        </div>
        <div className={s.img}>
          {images.map((image, index)=>(
            <div key={index}>
            <img key={index} src={image.imageUrl} alt={`${imageAlt} ${index + 1}`} />
            <p>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
  )
}
