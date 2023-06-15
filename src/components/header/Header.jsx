import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/img/Лого.svg';
import {motion} from 'framer-motion';
import CustomLink from './CustomLink';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import {useAuth} from "../Authorization/hooks/use-auth";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../store/slices/userSlise";

const NavLinkMotion = motion(NavLink);

const Header = () => {
    const dispatch = useDispatch()
    const {isAuth} = useAuth()
    const {isFetching} = useSelector(state => state.user)
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <NavLink
                        to="/"
                        
                    >
                        <img src={Logo} alt="logo"/>
                    </NavLink>
                    <NavLink
                        to="/"
                    >
                        <h3>TRIKMAP</h3>

                    </NavLink>
                </div>
                <div className={classes.link}>
                    <CustomLink
                        exact
                        to="/"
                        activeClassName={classes.activeNavLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Главная
                    </CustomLink>
                    <CustomLink
                        to="/hotels"
                        activeClassName={classes.activeNavLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Отели
                    </CustomLink>
                    <CustomLink
                        to="/tours"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Туры
                    </CustomLink>
                    <CustomLink
                        to="/attractions"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Достопримечательности
                    </CustomLink>
                    <CustomLink
                        to="/personal-account"
                        activeClassName={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                    >
                        Личный кабинет
                    </CustomLink>
                </div>
                {!isAuth ? <div className={classes.login}>
                    <CustomLink
                       to="/login"
                       activeClassName={classes.activeLink}
                       whileHover={{color: '#007D34'}}
                       transition={{duration: 0.3}}
                    >
                        Войти
                    </CustomLink>
                    <NavLinkMotion
                        to="/register"
                        whileHover={{scale: 1}}
                        whileTap={{scale: 0.9}}
                        className={classes.registerButton}
                    >
                        Регистрация
                    </NavLinkMotion>
                </div> : <div className={classes.login}>
                    <NavLink
                        onClick={() => dispatch(removeUser())}
                        className={classes.registerButton}
                        transition={{duration: 0.3}}
                    >
                        Выйти
                    </NavLink>
                </div>}
                <div className={classes.menu}>
                    <Menu isLazy>
                        <MenuButton as={Button} className={classes.customMenuButton}>Меню</MenuButton>
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