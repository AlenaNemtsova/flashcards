import 'animate.css';
import { useEffect } from 'react';


function Card({ id, tags, english, russian, transcription, pressed, isAnimated, setIsAnimated, handleClick }) {

    useEffect(() => {
        setIsAnimated(id)
    }, [id]);

    return (
        <div className={(isAnimated ? "flashcard-wrapper animated" : "flashcard-wrapper")}>
            <div className='flashcard'>
                <h4 className='flashcard__title'>{tags}</h4>
                <p className='flashcard__source'>{english}</p>
                <p className='flashcard__transcription'>{transcription}</p>
                <div className="flashcard__translation">
                    {pressed ? <span>{russian}</span> :
                        <button className="translate-btn" onClick={handleClick}>Перевод</button>}
                </div>

            </div>

        </div>
    );
}

Card.defaultProps = {
    tags: "tag",
    english: "english word",
    russian: "russian word",
    transcription: "transcription"
}

export default Card


