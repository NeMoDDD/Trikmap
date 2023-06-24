import React from 'react';
import { useEffect, useState  } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Wonder from './components/Wonders/Wonder';
import { Preloader } from '../common/Preloader';
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
import MapComponent from "../Map/Json/MapGeoJsonMarkers";
import LandMarks from './components/landMarks/Slider/LandMarks';


export default function Content() {
    const images = [
        { status: false, imageUrl: Issyk, text: 'Озеро Иссык-Куль' },
        { status: false, imageUrl: Sary, text: 'Озеро Сары-Челек' },
        { status: false, imageUrl: Soun, text: 'Озеро Сон-Куль' },
        { status: false, imageUrl: Ala, text: 'Озеро Ала-Куль' },
        { status: false, imageUrl: Fireplace, text: 'Комлекс отдыха 12 коминов' },
        { status: false, imageUrl: Waterfall, text: 'Водопад Слезы Барса' },
        { status: false, imageUrl: AlaArcha, text: 'Ущелье Ала-Арча' },
        { status: false, imageUrl: JetiOguz, text: 'Ущелье Джети-Огуз' }
    ];
    const imageAlt = 'Изображение';

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симулируем асинхронную загрузку данных
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
    const [refWonders, inViewWonders] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [refAbout, inViewAbout] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [refMap, inViewMap] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [refLandMarks, inViewLandMarks] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    if(isLoading){
        return <Preloader/>
    }

    return (
            <div>
            <Welcome />
            <div className={s.container}>
                <motion.div
                    className={s.content}
                    initial= 'hidden'
                    transition={{ duration: 0.5 }}
                    ref={refWonders}
                    variants={variants}
                    animate={inViewWonders ? 'visible' : 'hidden'}
                >
                    <Wonder images={images} imageAlt={imageAlt} />
                </motion.div>
                <motion.div
                    className={s.content}
                    ref={refAbout}
                    initial="hidden"
                    animate={inViewAbout ? 'visible' : 'hidden'}
                    variants={variants}
                >
                    <About />
                </motion.div>
                <motion.div
                    className={s.content}
                    ref={refMap}
                    initial="hidden"
                    animate={inViewMap ? 'visible' : 'hidden'}
                    variants={variants}
                >
                    {/*<Map />*/}
                    <MapComponent />
                </motion.div>
                <motion.div
                    className={s.content}
                    ref={refLandMarks}
                    initial="hidden"
                    animate={inViewLandMarks ? 'visible' : 'hidden'}
                    variants={variants}
                >
                    <LandMarks />
                </motion.div>
                </div>
            </div>
    );
}
