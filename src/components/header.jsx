import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className='header'>

        <div className='dictionary'>
            <div className='dictionary__icon'>
                <img></img>
            </div>
            <div className='dictionary__title'></div>
        </div>
        <div className='learn'>
        <div className='learn__icon'>
                <img></img>
            </div>
            <div className='learn__title'></div>

        </div>
        <div className='quiz'>
        <div className='quiz__icon'>
                <img></img>
            </div>
            <div className='quiz__title'></div>


        </div>
            
        </div>
    )
}

export default Header

