import React from 'react';
import './FlashCard.scss';

function FlashCard() {
    return (
        <div className='flashcard-wrapper'>
            <div className='flashcard'>

                <h4 className='flashcard__title'>Тема</h4>
                <p className='flashcard__source'>Англ. термин </p>
                {/* <p className='flashcard__translation'>{}</p> */}
                <p className='flashcard__transcription'>Транскрипция</p>
                <button className='translate-btn'>Перевод</button>
            </div>

        </div>
    )
}

export default FlashCard
