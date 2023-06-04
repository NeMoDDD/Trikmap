import React, { useState } from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/Лого.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hideOrShow, setHideOrShow] = useState({})

  const handleMenu = () =>{
    setIsOpen((prev) => !prev)
    if(isOpen){
      setHideOrShow(()=> {
        return{}
      })
    }
    else{
      setHideOrShow(()=> {
        return{ display:'flex' }
      })
    }
  }
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
          <h3>TRIKMAP</h3>
        </div>
        
        <div className={classes.link} style={hideOrShow}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/hotels">Отели</NavLink>
          <NavLink to="/tours">Туры</NavLink>
          <NavLink to="/">Достопримечательности</NavLink>
          <NavLink to="/">Личный кабинет</NavLink>
        </div>
        
        <div className={classes.login}>
          <NavLink to="/">Войти</NavLink>
          <button>Регистрация</button>
        </div>
        {isOpen ? <div className={classes.burger} onClick={handleMenu}  >
          <span></span>
        </div> : <div className={classes.burger} onClick={handleMenu}  >
          <span></span>
        </div> }
      </div>
    </div>
  );
};

export default Header;
