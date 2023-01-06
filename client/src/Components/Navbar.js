import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/Auth';

function Navbar() {
        function showNav () {
            if (Auth.loggedIn()) {
                return (
                    <div className='navBar'>
                        <ul className='flex-row'>
                            <li className='mx-1'>
                                <NavLink to='/user/:id'>
                                    Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                );
            } else {
                return (
                    <div className='navBar'>
                            <li className='mx-1'>
                                <NavLink to='/login'>
                                    Log-In
                                </NavLink>
                            </li>
                            <li className='mx-1'>
                                <NavLink to='/register'>
                                    Sign-Up
                                </NavLink>
                            </li>
                    </div>
                );
            }
        }
    return (
        <div className='navbar flex-row px-1'>
            <h2 className='homeNav'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
            </h2>

            <div className='px-2'>
                {showNav()}
            </div>
        </div>
    );
};

export default Navbar;
