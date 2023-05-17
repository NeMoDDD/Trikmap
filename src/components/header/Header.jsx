import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import Logo from '../../assets/Лого.svg'
export default function Header() {

  return (
    <div className={classes.main}>
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={Logo} alt="logo" />
                <h3>TRIKMAP</h3>
            </div>
            <div className={classes.link}>
                <a href="#">
                    Главная
                </a>
                <a href="#">
                    Отели
                </a>
                <a href="#">
                    Туры
                </a>
                <a href="#">
                    Достопримечательности
                </a>
                <a href="#">
                    Личный кабинет
                </a>
            </div>
            <div className={classes.login}>
                <a>Войти</a>
                <button>
                    Регистрация
                </button>
            </div>
        </div>
        
    </div>
  )
}
