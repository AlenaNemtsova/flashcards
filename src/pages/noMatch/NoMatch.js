import React from 'react';
import { Link } from 'react-router-dom';
import Ghost from '../../assets/img/ghost.svg'

import './NoMatch.scss';

function NoMatch() {
    return (
        <div className='noMatch'>
            <img className='noMatch__img' src={Ghost} alt='ghost picture'></img>
            <p className='noMatch__text'>Страница не найдена</p>
            <p className='noMatch__text_small'>Перейти на <Link className='noMatch__link' to='/'>главную страницу</Link></p>
        </div>
    )
}

export default NoMatch
