import classes from './components/footer/Footer.module.css'
import React from 'react';
import { Routes, Route } from "react-router-dom"
import LoginPage from "./components/Authorization/pages/LoginPage";
import RegisterPage from "./components/Authorization/pages/RegisterPage"
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
import { lazy } from 'react';
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


function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/hotels' element={<HotelContainer />} />
        <Route path='/hotels/:hotel' element={<OrderingHotel />} />
        <Route path='/tours' element={<ToursContainer />} /> 
        <Route path='/hotels/:hotel/order' element={<FormOrderHotel/>}/>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/personal-account'} element={<PersonalAccount />} />
        <Route path={'/attractions'} element={<AttractionsContainer />} />
        <Route path='*' element={<Error />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;


