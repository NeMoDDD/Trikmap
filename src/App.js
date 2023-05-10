import React from 'react';
import {Routes, Route} from "react-router-dom"
import LoginPage from "./components/Authorization/pages/LoginPage";
import RegisterPage from "./components/Authorization/pages/RegisterPage"
import './App.css';
import HomePage from "./HomePage";


function App() {
    return (
        <div>
            <Routes>
                <Route exact path={'/'} element={<HomePage/>}/>
                <Route exact path={'/login'} element={<LoginPage/>}/>
                <Route exact path={'/register'} element={<RegisterPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

