import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import Logo from '../../assets/img/Лого.svg'
export default function Header() {

  return (
    <div className={classes.main}>
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={Logo} alt="logo" />
                <h3>TRIKMAP</h3>
            </div>
            <div className={classes.link}>
                <NavLink to="/">
                    Главная
                </NavLink>
                <NavLink to="/">
                    Отели
                </NavLink>
                <NavLink to="/">
                    Туры
                </NavLink>
                <NavLink to="/">
                    Достопримечательности
                </NavLink>
                <NavLink to="/">
                    Личный кабинет
                </NavLink>
            </div>
            <div className={classes.login}>
                <NavLink to= '/'>Войти</NavLink>
                <button>
                    Регистрация
                </button>
            </div>
        </div>
        
    </div>
  )
}
