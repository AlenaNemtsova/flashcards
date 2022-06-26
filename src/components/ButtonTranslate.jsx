import React, { useState } from 'react';


function ButtonTranslate(props) {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div className="flashcard__translation">
            {pressed ? <span>{props.russian}</span> : 
            <button className="translate-btn" onClick={handleChange}>Перевод</button>}
        </div>
    )
}

export default ButtonTranslate
