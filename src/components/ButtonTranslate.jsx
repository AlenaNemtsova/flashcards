import React from 'react';


function ButtonTranslate(props) {
    const handleChange = () => {
        props.setPressed(!props.pressed);
    }
    console.log(props);

    return (
        <div className="flashcard__translation">
            {props.pressed ? <span>{props.russian}</span> : 
            <button className="translate-btn" onClick={handleChange}>Перевод</button>}
        </div>
    )
}

export default ButtonTranslate
