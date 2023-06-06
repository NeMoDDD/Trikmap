import React from 'react';
import { motion } from 'framer-motion';
import s from './LandMarks.module.css';
import Museum from '../../../../assets/img/Музеи.jpg';
import Park from '../../../../assets/img/Парки.jpg';
import Memorial from '../../../../assets/img/Памятники.jpg';

export default function LandMarks() {
  const images = [
    { imageUrl: Museum, text: 'Музеи' },
    { imageUrl: Park, text: 'Парки' },
    { imageUrl: Memorial, text: 'Памятники' },
  ];

  return (
    <div className={s.main}>
      <div className={s.title}>
        <h2>Достопримечательности</h2>
      </div>
      <div className={s.img_block}>
        {images.map((image, index) => (
          <div key={index}>
            <motion.div 
              className={s.test}
              // whileHover={{ scale: 1.1 }}
              // transition={{ duration: 0.3 }}
            >
              <motion.img  
              className={s.landMarks__img}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                key={index}
                src={image.imageUrl}
                alt={`${index + 1}`}
              />
            </motion.div>
            <p>{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
