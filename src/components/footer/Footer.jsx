import React from 'react'
import classes from './Footer.module.css'
import Whatsapp from '../../assets/img/ватсапп.svg';
import Telegram from '../../assets/img/Telegram.svg';
import Instagram from '../../assets/img/instgrm.svg'
export default function Footer({scrollToRef, ...props}) {


    const handleClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  }; 
    return (
        <div className={classes.main}>
            <div className={classes.footer}>
                <div className={classes.footer_item}>
                    <div className={classes.info}>
                        <div>  <a href="https://policies.google.com/privacy?hl=ru" target='_blank'>
                        Политика конфиденциальности
                        </a>
                           
                        </div>
                        <div onClick={handleClick}>
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
                            <a href={"https://instagram.com/anixii_"} target="_blank"><img
                                src={Instagram} alt="instagram" className={classes.img}/></a>
                            <a href={"https://t.me/anixii21"} target="_blank"><img src={Telegram} alt="telegram"
                                                                                    className={classes.img}/></a>
                            <a href={"https://wa.me/+996704712217"} target="_blank"><img src={Whatsapp} alt="whatsapp"
                                                                                         className={classes.img}/></a>
                        </div>
                    </div>
                  </div>
              </div>
          </div>

  )
}
