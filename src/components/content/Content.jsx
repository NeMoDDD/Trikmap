import React from 'react'
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Map from './components/map/Map';
import Wonder from './components/wonders/Wonder';
import s from './Content.module.css'
//импорты картинки
import Issyk from '../../assets/img/image 11.jpg';
import Sary from '../../assets/img/image 13.jpg';
import Soun from '../../assets/img/Сон-Куль-1 1.jpg';
import Ala from '../../assets/img/image 7.jpg';
import Fireplace from '../../assets/img/image 8.jpg';
import Waterfall from '../../assets/img/image 16.jpg';
import AlaArcha from '../../assets/img/image 6.jpg';
import JetiOguz from '../../assets/img/image 19.jpg'
import LandMarks from './components/landMarks/LandMarks';



export default function Content() {
  const images = [
    {imageUrl: Issyk, text: 'Озеро Иссык-Куль'}, 
    {imageUrl: Sary, text: 'Озеро Сары-Челек'}, 
    {imageUrl: Soun, text: 'Озеро Сон-Куль'}, 
    {imageUrl: Ala, text: 'Озеро Ала-Куль'}, 
    {imageUrl: Fireplace, text: 'Комлекс отдыха 12 коминов'}, 
    {imageUrl: Waterfall, text: 'Водопад Слезы Барса'}, 
    {imageUrl: AlaArcha, text: 'Ущелье Ала-Арча'}, 
    {imageUrl: JetiOguz, text: 'Ущелье Джети-Огуз'}   
  ];
  
  const imageAlt = 'Изображение';
  return (
    <div className={s.container}>
      <Welcome/>
      <Wonder images={images} imageAlt={imageAlt}/>
      <About/>
      <Map/>
      <LandMarks/>
    </div>
  )
}
