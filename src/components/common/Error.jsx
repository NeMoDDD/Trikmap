import s from './common.module.css'   
import errorImage from '../../assets/img/error.svg'
import { NavLink } from 'react-router-dom' 
import React from 'react'
import { connect } from 'react-redux' 
import { setErrorAC } from '../../reduxStore/appReducer'
const Error = React.memo((props) =>{  
    console.log(props); 
    const handleClearError = () =>{ 
        props.setErrorAC(false)
    }
    return( 
        <div className={s.error}>
            <div className={s.error__container}> 
                <div className={s.error__item}> 
                    <div className={s.error__image}><img className={s.error__img} src={errorImage} alt="error" /></div> 
                    
                    <div className={s.error__text}>  
                        <div className={s.error__title}>Oops!</div>
                        <div className={s.error__subtitle}>Страница, которую вы ищете, не существует.</div>  
                        <div className={s.error__link}><NavLink className={s.error__back_link} to={'/'}><button onClick={handleClearError} className={s.error__button}>Назад в главное меню</button></NavLink></div>
                    </div> 
                </div>
            </div>
        </div>
    )
} )  

export default connect(null, {setErrorAC})(Error)