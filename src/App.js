
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'   
import { lazy } from 'react';
import HotelContainer from './components/Hotel/HotelContainer'; 
import AddhotelContainer from './components/Hotel/addHotel/addhotelContainer';
import TourContainer from './components/Tours/TourContainer';  
import Error from './components/common/Error';
import FormOrderHotel from './components/Hotel/HotelInfo/OrderHotel/FormOrder/FormOrderHotel';
const OrderHotelContainer = lazy(() =>import('./components/Hotel/HotelInfo/OrderHotel/OrderHotelContainer'))
function App() {    
  return(  
    <div>      
      <NavLink to={'/add'}> Add hotel</NavLink>
      <NavLink to={'/hotels'}> Hotels</NavLink> 
      <NavLink to={'/tours/'}> TOurs</NavLink> 
      <NavLink to={'/order'}>Lox</NavLink>
      <Routes>  
        <Route path='/add/' element={<AddhotelContainer/>}/>
        <Route path='/hotels/' element={<HotelContainer/>}>  </Route>  
        <Route path='/hotels/:hotel' element={<OrderHotelContainer/>}/> 
        <Route path='/tours/' element={<TourContainer/>}/> 
        <Route path='/error/' element={<Error/>}/> 
        <Route path='/order' element={<FormOrderHotel/>}/>
      </Routes>
    </div>
    )
  }
  
  export default App;
  
