import React from 'react';
import {
    HashRouter as Router,
    Switch,
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
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
                <Route path='login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <SignUp />
                </Route>
                <Route path='/user/:id'>
                    <Profile />
                </Route>
            </Switch>
        </Router>
    )
};

export default Header;
