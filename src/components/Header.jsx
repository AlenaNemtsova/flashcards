import React from 'react';
import './Header.scss';
import bookIcon from '../assets/images/book-icon.svg';
import brainIcon from '../assets/images/brain-icon.svg';
import light from '../assets/images/lightbulbon.svg';
import logo from '../assets/images/speech-bubble.svg';
import { Link } from "react-router-dom";



function Header() {
    return (
        <div className='main-header'>
            <div className='header container'>
                <div className='header__bar'>
                    <div className='logo-container'>
                        <Link to='/' className='header__logo'>
                            <img src={logo} width="40px" height="40px"></img>
                            Flashcards</Link>
                    </div>

                    <nav className='header__menu menu'>


                        <div to='/' className='dictionary'>
                            <div className='dictionary__icon'>
                                <Link to='/dictionary'>
                                    <img src={bookIcon} width="45px" height="45px"></img>
                                </Link>

                            </div>
                            <div className='dictionary__title'>
                                <Link to='/dictionary'>Словарь</Link>
                            </div>
                        </div>
                        <div className='learn'>
                            <div className='learn__icon'>
                                <Link to='/learn'>
                                    <img src={brainIcon} width="45px" height="45px"></img>
                                </Link>
                            </div>
                            <div className='learn__title'>
                                <Link to='/learn'>Учить слова</Link>
                            </div>

                        </div>
                        <div className='quiz'>
                            <div className='quiz__icon'>
                                <Link to='/quiz'>
                                    <img src={light} width="45px" height="45px"></img>
                                </Link>
                            </div>
                            <div className='quiz__title'>
                                <Link to='/quiz'>Проверь себя</Link>
                            </div>


                        </div>

                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header

