import React from 'react';
import './Header.scss';
import bookIcon from '../assets/images/book-icon.svg'
import brainIcon from '../assets/images/brain-icon.svg'
import light from '../assets/images/lightbulbon.svg'


function Header() {
    return (
        <div className='header'>

            <div className='dictionary'>
                <div className='dictionary__icon'>
                    <a href='#'><img src={bookIcon} width="45px" height="45px"></img></a>

                </div>
                <div className='dictionary__title'>
                    <a href='#'>Словарь</a>
                </div>
            </div>
            <div className='learn'>
                <div className='learn__icon'>
                    <a href='#'><img src={brainIcon} width="45px" height="45px"></img></a>
                </div>
                <div className='learn__title'>
                    <a href='#'>Учить слова</a>
                </div>

            </div>
            <div className='quiz'>
                <div className='quiz__icon'>
                    <a href='#'><img src={light} width="45px" height="45px"></img></a>
                </div>
                <div className='quiz__title'>
                    <a href='#'>Проверь себя</a>
                </div>


            </div>

        </div>
    )
}

export default Header

