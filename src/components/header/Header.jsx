import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/img/Лого.svg';
import {motion} from 'framer-motion';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import {useAuth} from "../Authorization/hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlise";

const NavLinkMotion = motion(NavLink);

const Header = () => {
    const dispatch = useDispatch()
    const { isAuth } = useAuth()
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src={Logo} alt="logo"/>
                    <h3>TRIKMAP</h3>
                </div>
                <div className={classes.link}>
                    <NavLinkMotion
                        exact
                        to="/"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Главная
                    </NavLinkMotion>
                    <NavLinkMotion
                        to="/hotels"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Отели
                    </NavLinkMotion>
                    <NavLinkMotion
                        to="/tours"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Туры
                    </NavLinkMotion>
                    <NavLinkMotion
                        to="/attractions"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Достопримечательности
                    </NavLinkMotion>
                    <NavLinkMotion
                        to="/personal-account"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Личный кабинет
                    </NavLinkMotion>
                </div>
                { !isAuth ? <div className={classes.login}>
                    <NavLinkMotion
                        to="/login"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Войти
                    </NavLinkMotion>
                    <NavLinkMotion
                        to="/register"
                        whileHover={{scale: 1}}
                        whileTap={{scale: 0.9}}
                        className={classes.registerButton}
                    >
                        Регистрация
                    </NavLinkMotion>
                </div> : <div className={classes.login}>
                    <NavLinkMotion
                        onClick={() => dispatch(removeUser())}
                        className={classes.registerButton}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Выйти
                    </NavLinkMotion>
                </div>}

                <div className={classes.menu}>
                    <Menu className={classes.menu_wrapper}>
            <MenuButton as={Button} className={classes.customMenuButton}>
              Меню
            </MenuButton >
            <MenuList className={classes.customMenuList}>
              <NavLink to='/'>
                <MenuItem>Главная</MenuItem>
              </NavLink>
              <NavLink to='/hotels'>
                <MenuItem>Отели</MenuItem>
              </NavLink>
              <NavLink to='/tours'>
                <MenuItem>Туры</MenuItem>
              </NavLink>
              <NavLink to='/attractions'>
                <MenuItem>Достопримечательности</MenuItem>
              </NavLink>
              <NavLink to='/personal-account'>
                <MenuItem>Личный кабинет</MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;
