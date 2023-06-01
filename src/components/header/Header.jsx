import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/Лого.svg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
const Header = () => {
  return (
    <div className={classes.main}>
      <div div className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
          <h3>TRIKMAP</h3>
        </div>
        <div className={classes.link}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/">Отели</NavLink>
          <NavLink to="/">Туры</NavLink>
          <NavLink to="/">Достопримечательности</NavLink>
          <NavLink to="/">Личный кабинет</NavLink>
        </div>

        <div className={classes.login}>
          <NavLink to="/">Войти</NavLink>
          <button>Регистрация</button>
        </div>


        <div className={classes.menu}>
          <Menu className = {classes.menu_wrapper}>
            <MenuButton as={Button}  className={classes.customMenuButton}>
              Меню
            </MenuButton >
            <MenuList className={classes.customMenuList}>
              <MenuItem >Главная</MenuItem>
              <MenuItem >Отели</MenuItem>
              <MenuItem>Туры</MenuItem>
              <MenuItem>Достопримечательности</MenuItem>
              <MenuItem>Личный кабинет</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
