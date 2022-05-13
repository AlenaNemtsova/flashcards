import React from 'react';
import './Card.scss';

function Card() {
    return (
        <div className='card'>
        <h4 className='card__title'>{}</h4>
            <p className='card__source'>{}</p>
            <p className='card__translation'>{}</p>
            <p className='card__transcription'>{}</p>

            
        </div>
    )
}

export default Card
