import s from './common.module.css'   
import errorImage from '../../assets/img/error.svg'
import { NavLink } from 'react-router-dom' 
import React from 'react'
const Error = React.memo((props) =>{ 
    return( 
        <div className={s.error}>
            <div className={s.error__container}> 
                <div className={s.error__item}> 
                    <div className={s.error__image}><img className={s.error__img} src={errorImage} alt="error" /></div> 
                    
                    <div className={s.error__text}>  
                        <div className={s.error__title}>Oops!</div>
                        <div className={s.error__subtitle}>Страница, которую вы ищете, не существует.</div>  
                        <div className={s.error__link}><NavLink className={s.error__back_link} to={'/'}><button onClick={() => props.setError(false)} className={s.error__button}>Назад в главное меню</button></NavLink></div>
                    </div> 
                </div>
            </div>
        </div>
    )
} )
export default Error