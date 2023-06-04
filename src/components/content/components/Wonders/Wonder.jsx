import React, { useState } from 'react'
import Heart from '../../../../assets/img/DefaultHeart.svg'
import s from '../wonders/Wonder.module.css'
export default function Wonder({images, imageAlt}) {
  const [heart, setHeart] = useState(false)
  
  return (
    <div className={s.main}>
        <div className={s.title}>
            <h1>Чудеса Кыргызстана</h1>
        </div>
        <div className={s.img}>
          {images.map((image, index)=>(
            <div key={index} className={s.column}>
            {heart?<button onClick={() => setHeart(false)}><img src={Heart} alt="icon heart" /></button> : <div><button onClick={() => setHeart(true)}>red</button></div> }
            <img key={index} src={image.imageUrl} alt={`${imageAlt} ${index + 1}`} />
            <p>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
  )
}
