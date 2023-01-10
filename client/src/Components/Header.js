import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Profile from '../Pages/Profile';

function Header() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/'
                element={<Home/>}
                />
                <Route path='login'
                element={<Login/>}
                />
                <Route path='/register'
                element={<SignUp/>}
                />
                <Route path='/user/:id'
                element={<Profile/>}
                />
            </Routes>
        </Router>
    )
};

export default Header;
