
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'  
import OrderHotelContainer from './components/Hotel/HotelInfo/OrderHotel/OrderHotelContainer';
import HotelContainer from './components/Hotel/HotelContainer'; 
import AddhotelContainer from './components/Hotel/addHotel/addhotelContainer';
import TourContainer from './components/Tours/TourContainer';
function App() {    
  return(  
    <div>      
      <NavLink to={'/add'}> Add hotel</NavLink>
      <NavLink to={'/hotels'}> Hotels</NavLink> 
      <NavLink to={'/tours/'}> TOurs</NavLink>
      <Routes>  
        <Route path='/add/' element={<AddhotelContainer/>}/>
        <Route path='/hotels/' element={<HotelContainer/>}>  </Route>  
        <Route path='/hotels/:hotel' element={<OrderHotelContainer/>}/> 
        <Route path='/tours/' element={<TourContainer/>}/>
      </Routes>
    </div>
    )
  }
  
  export default App;
  
