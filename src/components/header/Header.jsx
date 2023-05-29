import React, { useState } from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/Лого.svg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
          <h3>TRIKMAP</h3>
        </div>
        <div className={`${classes.link} ${isMenuOpen ? classes.open : ''}`}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/">Отели</NavLink>
          <NavLink to="/">Туры</NavLink>
          <NavLink to="/">Достопримечательности</NavLink>
          <NavLink to="/">Личный кабинет</NavLink>
        </div>
        <div className={classes.mobileMenu} onClick={toggleMenu}>
          <div className={isMenuOpen ? classes.burgerActive : classes.burger} />
        </div>
        <div className={`${classes.login} ${isMenuOpen ? classes.open : ''}`}>
          <NavLink to="/">Войти</NavLink>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
