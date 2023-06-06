import classes from './components/footer/Footer.module.css'
import React from 'react';
import { Routes, Route } from "react-router-dom"
import LoginPage from "./components/Authorization/pages/LoginPage";
import RegisterPage from "./components/Authorization/pages/RegisterPage"
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
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

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/hotels' element={<ErrorCatch> <HotelContainer/> </ErrorCatch>} />
        <Route path='/hotels/:hotel' element={<ErrorCatch><OrderingHotel /></ErrorCatch>} />
        <Route path='/tours' element={<ErrorCatch><ToursContainer /></ErrorCatch>} /> 
        <Route path='/hotels/:hotel/order' element={<ErrorCatch><FormOrderHotel/> </ErrorCatch>}/>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/personal-account'} element={<PersonalAccount />} />
        <Route path={'/attractions'} element={<AttractionsContainer />} />
        <Route path='*' element={<Error />} /> 
        <Route path='/add' element={<AddHotelContainer/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;


