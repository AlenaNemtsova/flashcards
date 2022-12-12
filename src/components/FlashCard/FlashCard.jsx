import { forwardRef } from 'react';
import ButtonTranslate from '../ButtonTranslate/ButtonTranslate';
import 'animate.css';
// import { useRef, useEffect } from 'react';
import { useEffect } from 'react';



const FlashCard = forwardRef(({ id, tags, english, russian, transcription, pressed = { pressed }, setPressed = { setPressed }, animationStart, setAnimationStart, countWords = { countWords } }, ref) => {

    useEffect(() => {
        console.log(animationStart);
        setAnimationStart(id)
    }, [id]);

    return (
        <div className={(animationStart ? "flashcard-wrapper animated" : "flashcard-wrapper")}>
            <div className='flashcard'>
                <h4 className='flashcard__title'>{tags}</h4>
                <p className='flashcard__source'>{english}</p>
                <p className='flashcard__transcription'>{transcription}</p>
                <ButtonTranslate pressed={pressed} setPressed={setPressed} countWords={countWords} russian={russian} ref={ref}></ButtonTranslate>
            </div>

        </div>
    );
},
)

FlashCard.defaultProps = {
    tags: "tag",
    english: "english word",
    russian: "russian word",
    transcription: "transcription"
}

export default FlashCard


