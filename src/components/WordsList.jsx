import React from 'react';
import './WordsList.scss';
import pencilIcon from '../assets/images/pencil5-icon.svg';
import deleteIcon from '../assets/images/trash-icon.svg';
import cancelIcon from '../assets/images/cancel2-cross-icon.svg'


function WordsList({rows}) {

    const [isEditMode, setIsEditMode] = useState(false);

    const handleEdit = () => {
        setIsEditMode(!isEditMode);
    }

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Английский</th>
                        <th>Русский</th>
                        <th>Транскрипция</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {rows.map((row) =>
                        <tr>
                            <td>
                                {isEditMode ? <input type="text" value={row.english}></input> : row.english}
                            </td>

                            <td>
                                {isEditMode ? <input type="text" value={row.russian}></input> : row.russian}
                            </td>
                            <td>
                                {isEditMode ? <input type="text" value={row.transcription}></input> : row.transcription}
                            </td>
                            <td className='row-control-btns'>
                                {isEditMode ?
                                    <>
                                        <button className='save-btn'>Сохранить</button>
                                        <button className='cancel-btn'><img src={cancelIcon}></img></button>
                                    </> :
                                    <>
                                        <button className='edit-btn' onClick={handleEdit}><img src={pencilIcon}></img></button>
                                        <button className='delete-btn'><img src={deleteIcon}></img></button>
                                    </>
                                }
                            </td>
                        </tr>
                    )
                    }

                    <tr>
                        <td>
                        <input placeholder='Термин'></input>
                        </td>
                        <td>
                        <input placeholder='Перевод'></input>
                        </td>
                        <td>
                        <input placeholder='Транскрипция'></input>
                        </td>
                        <td>
                        <button className='save-btn'>Сохранить</button>
                        </td>
                    </tr>

                </tbody>

            </table>

        </React.Fragment>
    )
}

export default WordsList
