import React from 'react'
import classes from './Footer.module.css'
import Whatsapp from '../../assets/img/ватсапп.svg';
import Telegram from '../../assets/img/Telegram.svg';
import Instagram from '../../assets/img/instgrm.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className={classes.main}>
            <div className={classes.footer}>
                <div className={classes.footer_item}>
                    <div className={classes.info}>
                        <div>
                            Политика конфиденциальности
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
                            <Link href={"https://instagram.com/kurmankulovb_?igshid=MmIzYWVlNDQ5Yg=="} target="_blank"><img
                                src={Instagram} alt="instagram" className={classes.img}/></Link>
                            <Link href={"https://t.me/belekkurm"} target="_blank"><img src={Telegram} alt="telegram"
                                                                                    className={classes.img}/></Link>
                            <Link href={"https://wa.me/+996553442209"} target="_blank"><img src={Whatsapp} alt="whatsapp"
                                                                                         className={classes.img}/></Link>
                        </div>
                    </div>
                  </div>
              </div>
          </div>

  )
}
