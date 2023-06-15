import React from 'react';
import { motion } from 'framer-motion';
import s from './Welcome.module.css'
export default function Welcome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <motion.div
      className={s.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={s.main}>
        <motion.div className={s.title} variants={titleVariants}>
          <h1>
            Добро Пожаловать!
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
}
