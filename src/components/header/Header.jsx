import React, {useEffect} from 'react';
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
import {useLocation} from 'react-router-dom';

const NavLinkMotion = motion(NavLink);

const Header = () => {
    const location = useLocation(); // Нужен!
    useEffect(() => {
        if (window.location.pathname !== "/login" && window.location.pathname !== "/register") {
            localStorage.setItem('redirectPath', window.location.pathname)
        }
    }, [window.location.pathname]);

    const dispatch = useDispatch()
    const {isAuth} = useAuth()
    const {isFetching} = useSelector(state => state.user)

    const navigateLink = () => {
        if (window.location.pathname !== "/login" && window.location.pathname !== "/register") {
            localStorage.setItem('redirectPath', window.location.pathname)
        }
    }
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <NavLink
                        to="/"
                        onClick={() => navigateLink()}
                    >
                        <img src={Logo} alt="logo"/>
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={navigateLink}
                    >
                        <h3>TRIKMAP</h3>

                    </NavLink>
                </div>
                <div className={classes.link}>
                    <CustomLink
                        to="/"
                        activeclassname={classes.activeNavLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Главная
                    </CustomLink>
                    <CustomLink
                        to="/hotels"
                        activeclassname={classes.activeNavLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Отели
                    </CustomLink>
                    <CustomLink
                        to="/tours"
                        activeclassname={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Туры
                    </CustomLink>
                    <CustomLink
                        to="/attractions"
                        activeclassname={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Достопримечательности
                    </CustomLink>
                    <CustomLink
                        to="/personal-account"
                        activeclassname={classes.activeLink}
                        whileHover={{color: '#007D34'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Личный кабинет
                    </CustomLink>
                </div>
                {!isAuth ? <div className={classes.login}>
                    <CustomLink
                        to="/login"
                        activeclassname={classes.activeLink}
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
                </div> : <div className={classes.quitButton}>
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