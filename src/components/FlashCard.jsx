import ButtonTranslate from './ButtonTranslate';
import './FlashCard.scss';

function FlashCard({ ...props}) {
    FlashCard.defaultProps = {
        english: "hello",
        transcription: "[hə'ləʊ]",
        russian: "привет",
    }
    
    return (
        <div className='flashcard-wrapper'>
            <div className='flashcard'>
                <h4 className='flashcard__title'>{props.tags}</h4>
                <p className='flashcard__source'>{props.english}</p>
                <p className='flashcard__transcription'>{props.transcription}</p>
                <ButtonTranslate russian={props.russian}></ButtonTranslate> 
            </div>

        </div>
    )
}

export default FlashCard
