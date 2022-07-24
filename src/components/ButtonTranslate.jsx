import React from 'react';


function ButtonTranslate(props) {
    const handleClick = () => {
        props.setPressed(!props.pressed);
        props.countWords();
    }

    return (
        <div className="flashcard__translation">
            {props.pressed ? <span>{props.russian}</span> : 
            <button className="translate-btn" onClick={handleClick}>Перевод</button>}
        </div>
    )
}

export default ButtonTranslate
