import { NavLink } from 'react-router-dom';
import Bubble from '../../assets/img/speech-bubble.svg';
import Book from '../../assets/img/book-icon.svg';
import Brain from '../../assets/img/brain-icon.svg';
import Lightbulb from '../../assets/img/lightbulbon.svg';
import Hamburger from '../../assets/img/hamburger-icon.svg'

import './Header.scss';

function Header() {
    return (
        <div className='header-wrapper'>
            <header className='header container'>
                <div className='logo-container'>
                    <NavLink to='/' className='header__logo'>
                        <img className='logo' src={Bubble} alt='two message clouds' />
                        <span>Flashcards</span>
                    </NavLink>
                </div>

                <nav className='header__nav'>
                    <NavLink to='/dictionary' className='dictionary header__nav-item'>
                        <div className='dictionary__icon'>
                            <img className='icon' src={Book} alt='opened book' />
                        </div>
                        <div className='dictionary__title'>
                            <span>Словарь</span>
                        </div>
                    </NavLink>
                    <NavLink to='/learn' className='learn header__nav-item'>
                        <div className='learn__icon'>
                            <img className='icon' src={Brain} alt='mens head' />
                        </div>
                        <div className='learn__title'>
                            <span>Учить слова</span>
                        </div>

                    </NavLink>
                    <NavLink to='/quiz' className='quiz header__nav-item'>
                        <div className='quiz__icon'>
                            <img className='icon' src={Lightbulb} alt='light bulb on' />
                        </div>
                        <div className='quiz__title'>
                            <span>Проверь себя</span>
                        </div>
                    </NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header

