import React from 'react'
import MapImg from '../../../../assets/img/Map.jpg'
import s from './Map.module.css'
export default function Map() {
    const buttons = [
        'Все',
        'Бишкек',
        'Иссык-Куль',
        'Нарын',
        'Кара-Балта',
        'Джалал-Абад',
        'Ош',
        'Баткен'
    ]
    return (
        <div className={s.main}>
            <div className={s.title}>
                <h2> Карта поездки </h2>
            </div>
            <div className={s.btn_container}>
            <div className={s.btn_region}>
                <button>Регионы</button>
            </div>
            <div className={s.btn_block}>
                {buttons.map((button, index) => (
                    <div key={index}>
                        <button key={index}>{button}</button>
                    </div>
                ))}
            </div>
            </div>
            <div className={s.map}>
                <img src={MapImg} alt="Map" />
            </div>

        </div>
    )
}
