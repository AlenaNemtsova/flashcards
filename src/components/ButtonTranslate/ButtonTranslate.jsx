import React from 'react';
import { forwardRef } from 'react';

const ButtonTranslate = forwardRef((props, ref) => {
      const handleClick = () => {
        props.setPressed(!props.pressed);
        props.countWords();
    };

    return (
        <div className="flashcard__translation">
            {props.pressed ? <span>{props.russian}</span> : 
            <button className="translate-btn" onClick={handleClick} ref={ref}>Перевод</button>}
        </div>
    );
},
)


export default ButtonTranslate
