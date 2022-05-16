import React from 'react';
import './FlashCard.scss';

function FlashCard() {
    return (
        <div className='flashcard-wrapper'>
        <div className='flashcard'>

        <h4 className='flashcard__title'>Название</h4>
            <p className='flashcard__source'>Термин </p>
            {/* <p className='flashcard__translation'>{}</p> */}
            <p className='flashcard__transcription'>Транскрипция</p>
</div>
            
        </div>
    )
}

export default FlashCard
