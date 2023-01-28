import React from 'react';
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className='main-header'>
            <div className='header container'>
                <div className='header__bar'>
                    <div className='logo-container'>
                        <NavLink to='/' className='header__logo'>
                            <img className='logo' src='assets/img/speech-bubble.svg' alt='logo'></img>
                            Flashcards</NavLink>
                    </div>

                    <nav className='header__menu menu'>


                        <NavLink to='/dictionary' >
                            <div className='dictionary__icon'>
                                <img className='icon' src='assets/img/book-icon.svg' alt='dictionary icon'></img>
                            </div>
                            <div className='dictionary__title dictionary'>
                                <span>Словарь</span>
                            </div>
                        </NavLink>
                        <NavLink to='/learn' className='learn'>
                            <div className='learn__icon'>
                                <img className='icon' src='assets/img/brain-icon.svg' alt='learn words icon'></img>
                            </div>
                            <div className='learn__title'>
                                <span>Учить слова</span>
                            </div>

                        </NavLink>
                        <NavLink to='/quiz' className='quiz'>
                            <div className='quiz__icon'>
                                <img className='icon' src='assets/img/lightbulbon.svg' alt='quiz icon'></img>
                            </div>
                            <div className='quiz__title'>
                                <span>Проверь себя</span>
                            </div>


                        </NavLink>

                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header

