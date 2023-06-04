import classes from './components/footer/Footer.module.css'
import './App.css';
import Header from './components/header/Header';  
import Content from './components/content/Content'
import Footer from './components/footer/Footer'; 
import HotelContainer from './components/Hotel/HotelContainer' 
import TourContainer from './components/Tours/TourContainer' 
import { Route, Routes } from 'react-router'; 
import { lazy } from 'react';
const OrderHotelContainer = lazy(() =>import('./components/Hotel/HotelInfo/OrderHotel/OrderHotelContainer'))
function App() {
  return (
    <div className={classes.container}>
      <Header/> 
      <Routes>  
      <Route path='/' element={<Content/>}/> 
      <Route path='/hotels' element={<HotelContainer/>}/> 
      <Route path='/tours' element={<TourContainer/>}/> 
      <Route path='/hotels/:hotel' element={<OrderHotelContainer/>}/> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
