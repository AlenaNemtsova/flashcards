import ButtonTranslate from './ButtonTranslate';
import './FlashCard.scss';

function FlashCard({tags = "tag", english = "english word", russian = "russian word", transcription = "transcription", pressed ={pressed}}) {
    
    
    return (
        <div className='flashcard-wrapper'>
            <div className='flashcard'>
                <h4 className='flashcard__title'>{tags}</h4>
                <p className='flashcard__source'>{english}</p>
                <p className='flashcard__transcription'>{transcription}</p>
                <ButtonTranslate pressed={pressed} russian={russian}></ButtonTranslate> 
            </div>

        </div>
    )
}

export default FlashCard
