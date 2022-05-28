import React, { useState } from 'react';


function ButtonTranslate() {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }




    return (
        <div>
            <button               onClick={handleChange}
                 >{pressed ? "русский перевод" : "Перевод"}</button>
        </div>
    )
}

export default ButtonTranslate
