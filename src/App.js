import classes from './components/footer/Footer.module.css'
import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom"
import LoginPage from "./components/Authorization/pages/LoginPage";
import RegisterPage from "./components/Authorization/pages/RegisterPage"
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {lazy} from 'react';
// const HotelContainer = lazy(()=> import('./components/Hotel/HotelContainer'))
// const OrderingHotel = lazy(()=> import('./components/Hotel/HotelInfo/OrderHotel/OrderHotelContainer'))
// const ToursContainer = lazy(()=> import('./components/Tours/TourContainer'))
import HotelContainer from './components/Hotel/HotelContainer'
import OrderingHotel from './components/Hotel/HotelInfo/OrderHotel/OrderHotelContainer'
import ToursContainer from './components/Tours/TourContainer'
import PersonalAccount from "./components/Personal account/PersonalAccount";
import AttractionsContainer from "./components/Attractions/AttractionsContainer";
import Error from './components/common/Error'
import FormOrderHotel from './components/Hotel/HotelInfo/OrderHotel/FormOrder/FormOrderHotel';
import ErrorCatch from './hoc/ErrorCatch';
import AddHotelContainer from './components/Hotel/addHotel/addhotelContainer'
import DefineTourContainer from './components/Tours/AllTours/defineTour/DefineTourContainer';
import TourForm from './components/Tours/AllTours/defineTour/TourForm';
import {setUser, setUserFetching} from "./components/store/slices/userSlise";
import {useDispatch} from "react-redux";
function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        // Проверка наличия данных пользователя в localStorage
        const user = localStorage.getItem('user');
        if (user) {
            dispatch(setUserFetching(true))
            // Восстановление сеанса пользователя
            const userData = JSON.parse(user);
            const auth = getAuth();
            signInWithEmailAndPassword(auth, userData.email, userData.password)
                .then(() => {
                    dispatch(setUser({
                        email: userData.email,
                        id: userData.id,
                        token: userData.token,
                        nickname: userData.nickname,
                        userImg: userData.userImg
                    }))

                })
                .catch(error => {
                    // Обработка ошибок
                });
            dispatch(setUserFetching(false))
        }
    }, []);
  return (
    <div className={classes.container}>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
         
        <Route path='/hotels' element={<ErrorCatch> <HotelContainer/> </ErrorCatch>} />
        <Route path='/hotels/:hotel' element={<ErrorCatch><OrderingHotel /></ErrorCatch>} />
        <Route path='/hotels/:hotel/order' element={<ErrorCatch><FormOrderHotel/> </ErrorCatch>}/>
         
        <Route path='/tours' element={<ErrorCatch><ToursContainer /></ErrorCatch>} /> 
        <Route path='/tours/:tour' element={<ErrorCatch><DefineTourContainer/></ErrorCatch>}/>  
        <Route path='/tours/:tour/order' element={<ErrorCatch><TourForm/> </ErrorCatch>}/>
        <Route path={'/login'} element={<ErrorCatch><LoginPage /></ErrorCatch>}/>
        <Route path={'/register'} element={<ErrorCatch><RegisterPage /></ErrorCatch>} />
        <Route path={'/personal-account'} element={<ErrorCatch><PersonalAccount /></ErrorCatch>} />
        <Route path={'/attractions'} element={<ErrorCatch><AttractionsContainer /></ErrorCatch>} />
        <Route path='*' element={<Error />} /> 
        <Route path='/add' element={<ErrorCatch><AddHotelContainer/></ErrorCatch>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;


