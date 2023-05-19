import React from 'react'
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
//импорты картинки
import Wonder from './components/Wonders/Wonder';
import Issyk from '../../assets/image 11.jpg';
import Sary from '../../assets/image 13.jpg';
import Soun from '../../assets/Сон-Куль-1 1.jpg';
import Ala from '../../assets/image 7.jpg';
import Fireplace from '../../assets/image 8.jpg';
import Waterfall from '../../assets/image 16.jpg';
import AlaArcha from '../../assets/image 6.jpg';
import JetiOguz from '../../assets/image 19.jpg'



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
    <div>
      <Welcome/>
      <Wonder images={images} imageAlt={imageAlt}/>
      <About/>
    </div>
  )
}
