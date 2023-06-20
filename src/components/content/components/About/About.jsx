import React from 'react';
import AboutImg from '../../../../assets/img/aboutImg.jpg';
import s from './About.module.css';

export default function About() {
  return (
    <div className={s.about}>
      <div className={s.title}>
        <h3>О нас</h3>
      </div>
      <div className={s.item}>
        <div className={s.text}>
          <p>
            <strong>TRIKMAP</strong> - это интерактивный гид по городам Кыргызстана на ReactJs.
            Проект предназначен для туристов и жителей Кыргызстана, которые хотят получить информацию о достопримечательностях и исторических местах городов Кыргызстана.
          </p>
          <p>
            В проекте реализована возможность выбора города, получения информации о достопримечательностях и исторических местах, выбора места на карте, добавления комментариев и фотографий к различным местам. Проект разработан на ReactJs с использованием библиотеки картографических данных, таких как Google Maps или Leaflet.
          </p>
          <p>
            Данные о достопримечательностях и исторических местах получены с помощью API, таких как Wikipedia API или Google Places API. Система использует базу данных для хранения информации о местах, комментариях и фотографиях и обладает высокой производительностью. Также в проекте предусмотрены дополнительные возможности, такие как фильтрация информации о местах по категориям, оставление отзывов и рейтингов для мест, интеграция с социальными сетями.
          </p>
        </div>
        <div className={s.imageContainer}>
          <img src={AboutImg} alt="Изображение" className={s.image} />
        </div>
      </div>
    </div>
  );
}
