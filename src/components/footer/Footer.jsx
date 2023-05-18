import React from 'react'
import classes from './Footer.module.css'
import Whatsapp from '../../assets/ватсапп.svg';
import Telegram from '../../assets/Telegram.svg';
import Instagram from '../../assets/instgrm.svg'
export default function Footer() {
  return (
      <div className={classes.main}>
          <div className={classes.footer}>
              <div className={classes.footer_item}>
                <div className={classes.info}>
                  <div>
                    <p>Политика конфиденциальности</p>
                  </div>
                  <div>
                    О нас
                  </div>
                  </div>
              </div>
              <div className={classes.footer_item}>
                <div className={classes.link}>
                    <div className={classes.follow}>
                    <h3>Follow</h3>
                   </div>
                    <div className={classes.icons}>
                      <img src={Instagram} alt="instagram" className={classes.img} />
                      <img src={Telegram} alt="telegram" className={classes.img} />
                      <img src={Whatsapp} alt="whatsapp" className={classes.img} />
                    </div>
                  </div>
              </div>
          </div>

      </div>
  )
}
