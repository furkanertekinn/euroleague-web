import React, { useEffect, useState } from 'react';
import logo from '../image/logo.jpg';
import '../component/header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        if (location.pathname === '/home') {
            setCurrentPage('home');
        } else if (location.pathname === '/teams') {
            setCurrentPage('teams');
        }
        else if (location.pathname === '/players') {
            setCurrentPage('players');
        }
        else if (location.pathname === '/games') {
            setCurrentPage('games');
        }
        else if (location.pathname === '/contact') {
            setCurrentPage('contact');
        }
        else if (location.pathname === '/add') {
            setCurrentPage('add');
        }
    }, [location.pathname]);

    return (
        <header className='header'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <nav class="bg-back border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" class="flex items-center">
                        <img src={logo} class="mr-3 h-6 sm:h-9" alt="" />
                        <span class="self-center text-medium font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <ul>
                            <Link to="/add" className={currentPage === 'add' ? 'active' : ''}>Add</Link>
                        </ul>
                        <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Log In</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <Link to="/home" className={currentPage === 'home' ? 'active' : ''}>Home</Link>
                        <Link to="/teams" className={currentPage === 'teams' ? 'active' : ''}>Teams</Link>
                        <Link to="/players" className={currentPage === 'players' ? 'active' : ''}>Players</Link>
                        <Link to="/games" className={currentPage === 'games' ? 'active' : ''}>Games</Link>
                        <Link to="/contact" className={currentPage === 'contact' ? 'active' : ''}>Contact</Link>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header