
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'  
import OrderHotelContainer from './components/Hotel/HotelInfo/OrderHotel/OrderHotelContainer';
import HotelContainer from './components/Hotel/HotelContainer'; 
import AddhotelContainer from './components/Hotel/addHotel/addhotelContainer';
function App() {    
  return(  
    <div>      
      <NavLink to={'/add'}> Add hotel</NavLink>
      <NavLink to={'/hotels'}> Hotels</NavLink>
      <Routes>  
        <Route path='/add/' element={<AddhotelContainer/>}/>
        <Route path='/hotels/' element={<HotelContainer/>}>  </Route>  
        <Route path='/hotels/:hotel' element={<OrderHotelContainer/>}/>
      </Routes>
    </div>
    )
  }
  
  export default App;
  
