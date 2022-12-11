import React from 'react';
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className='main-header'>
            <div className='header container'>
                <div className='header__bar'>
                    <div className='logo-container'>
                        <Link to='/' className='header__logo'>
                            <img className='logo' src='assets/img/speech-bubble.svg' alt='logo'></img>
                            Flashcards</Link>
                    </div>

                    <nav className='header__menu menu'>


                        <div to='/' className='dictionary'>
                            <div className='dictionary__icon'>
                                <Link to='/dictionary'>
                                    <img className='icon' src='assets/img/book-icon.svg' alt='dictionary icon'></img>
                                </Link>

                            </div>
                            <div className='dictionary__title'>
                                <Link to='/dictionary'>Словарь</Link>
                            </div>
                        </div>
                        <div className='learn'>
                            <div className='learn__icon'>
                                <Link to='/learn'>
                                    <img className='icon' src='assets/img/brain-icon.svg' alt='learn words icon'></img>
                                </Link>
                            </div>
                            <div className='learn__title'>
                                <Link to='/learn'>Учить слова</Link>
                            </div>

                        </div>
                        <div className='quiz'>
                            <div className='quiz__icon'>
                                <Link to='/quiz'>
                                    <img className='icon' src='assets/img/lightbulbon.svg' alt='quiz icon'></img>
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

