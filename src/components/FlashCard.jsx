import ButtonTranslate from './ButtonTranslate';
import './FlashCard.scss';

function FlashCard() {

    
    return (
        <div className='flashcard-wrapper'>
            <div className='flashcard'>

                <h4 className='flashcard__title'>Тема</h4>
                <p className='flashcard__source'>Англ. термин </p>
                {/* <p className='flashcard__translation'>{}</p> */}
                <p className='flashcard__transcription'>Транскрипция</p>
                <ButtonTranslate className="translate-btn"></ButtonTranslate> 
                
            </div>

        </div>
    )
}

export default FlashCard
