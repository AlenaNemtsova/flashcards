import ButtonTranslate from './ButtonTranslate';
import './FlashCard.scss';

function FlashCard() {

    return (
        <div className='flashcard-wrapper'>
            <div className='flashcard'>
                <h4 className='flashcard__title'>Животные</h4>
                <p className='flashcard__source'>mouse</p>
                <p className='flashcard__transcription'>[ maʊs ]</p>
                <ButtonTranslate></ButtonTranslate> 
            </div>

        </div>
    )
}

export default FlashCard
