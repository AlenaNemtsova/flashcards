import ButtonTranslate from './ButtonTranslate';
import './FlashCard.scss';
import 'animate.css';

function FlashCard({tags = "tag", english = "english word", russian = "russian word", transcription = "transcription", pressed ={pressed}, setPressed = {setPressed}, animationStart}) {

    console.log(animationStart);

    return (
        <div className={(animationStart ? "flashcard-wrapper animated" : "flashcard-wrapper")}>
            <div className='flashcard'>
                <h4 className='flashcard__title'>{tags}</h4>
                <p className='flashcard__source'>{english}</p>
                <p className='flashcard__transcription'>{transcription}</p>
                <ButtonTranslate pressed={pressed} setPressed = {setPressed} russian={russian}></ButtonTranslate> 
            </div>

        </div>
    )
}

export default FlashCard
