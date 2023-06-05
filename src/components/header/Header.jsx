import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/Лого.svg';
import { motion } from 'framer-motion';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';

const NavLinkMotion = motion(NavLink);

const Header = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" className={classes.logo_img} />
          <h3>TRIKMAP</h3>
        </div>
        <div className={classes.link}>
          <NavLinkMotion
            exact
            to="/"
            activeClassName={classes.activeLink}
            whileHover={{ color: '#382ca3' }}
            transition={{ duration: 0.3 }}
          >
            Главная
          </NavLinkMotion>
          <NavLinkMotion
            to="/hotels"
            activeClassName={classes.activeLink}
            whileHover={{ color: '#382ca3' }}
            transition={{ duration: 0.3 }}
          >
            Отели
          </NavLinkMotion>
          <NavLinkMotion
            to="/tours"
            activeClassName={classes.activeLink}
            whileHover={{ color: '#382ca3' }}
            transition={{ duration: 0.3 }}
          >
            Туры
          </NavLinkMotion>
          <NavLinkMotion
            to="/attractions"
            activeClassName={classes.activeLink}
            whileHover={{ color: '#382ca3' }}
            transition={{ duration: 0.3 }}
          >
            Достопримечательности
          </NavLinkMotion>
          <NavLinkMotion
            to="/personal-account"
            activeClassName={classes.activeLink}
            whileHover={{ color: '#382ca3' }}
            transition={{ duration: 0.3 }}
          >
            Личный кабинет
          </NavLinkMotion>
        </div>

        <div className={classes.login}>
          <NavLinkMotion
            to="/login"
            activeClassName={classes.activeLink}
            whileHover={{ color: '#382ca3' }}
            transition={{ duration: 0.3 }}
          >
            Войти
          </NavLinkMotion>
          <NavLink to = '/register'>
          <motion.button
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className={classes.registerButton}

          >
            Регистрация
          </motion.button>
          </NavLink>
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
