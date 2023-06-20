import React from "react"  
import s from './common.module.css' 
import { NavLink } from "react-router-dom" 
const CustomError =React.memo(({title,btnValue,img,text})=>{ 
    return( 
        <div> 
             <div className={s.error}>
            <div className={s.error__container}> 
                <div className={s.error__item}> 
                    <div className={s.error__image}><img className={s.error__img} src={img} alt="error" /></div> 
                    
                    <div className={s.error__text}>  
                        <div className={s.error__title}>{text}</div>
                        <div className={s.error__subtitle}>{title}</div>  
                        {!!btnValue ? <div className={s.error__link}><NavLink className={s.error__back_link} to={'/'}><button className={s.error__button}>Назад в главное меню</button></NavLink></div> :null}
                    </div> 
                </div>
            </div>
        </div>
        </div>
    )
}) 
export default CustomError