import classes from './components/footer/Footer.module.css'
import React from 'react';
import {Routes, Route} from "react-router-dom"
import LoginPage from "./components/Authorization/pages/LoginPage";
import RegisterPage from "./components/Authorization/pages/RegisterPage"
import './App.css';
import Header from './components/header/Header'; 
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router'; 
import { lazy } from 'react';
// const HotelContainer = lazy(()=> import('./components/Hotel/HotelContainer')) 
// const OrderingHotel = lazy(()=> import('./components/Hotel/HotelInfo/OrderHotel/OrderHotelContainer')) 
// const ToursContainer = lazy(()=> import('./components/Tours/TourContainer')) 
import HotelContainer from './components/Hotel/HotelContainer' 
import OrderingHotel from './components/Hotel/HotelInfo/OrderHotel/OrderHotelContainer' 
import ToursContainer from './components/Tours/TourContainer'
import HomePage from "./components/HomePage/HomePage";
import PersonalAccount from "./components/Personal account/PersonalAccount";
import AttractionsContainer from "./components/Attractions/AttractionsContainer";


function App() {
  return (
    <div className={classes.container}>
      <Header/> 
      <Routes> 
      <Route path='/' element={<Content/>}/> 
      <Route path='/hotels' element={<HotelContainer/>}/> 
      <Route path='/hotels/:hotel' element={<OrderingHotel/>}/> 
      <Route path='/tours' element={<ToursContainer/>}/> 
                <Route exact path={'/login'} element={<LoginPage/>}/>
                <Route exact path={'/register'} element={<RegisterPage/>}/>
                <Route exact path={'/personal-account'} element={<PersonalAccount/>}/>
                <Route exact path={'/attractions'} element={<AttractionsContainer/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

