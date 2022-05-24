import React from 'react';
import './WordsList.scss';
import pencilIcon from '../assets/images/pencil5-icon.svg';
import deleteIcon from '../assets/images/trash-icon.svg';
import cancelIcon from '../assets/images/cancel2-cross-icon.svg'

const rows = [
    { "id": "11346", "english": "street", "transcription": "[ stri:t ]", "russian": "улица", "tags": "овощи", "tags_json": "[\"u043eu0432u043eu0449u0438\"]" },
];


function WordsList() {

    let isEditMode = true;

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
                                {isEditMode ? <input placeholder='Термин'></input> : row.english}
                            </td>

                            <td>
                                {isEditMode ? <input placeholder='Перевод'></input> : row.russian}
                            </td>
                            <td>
                                {isEditMode ? <input placeholder='Транскрипция'></input> : row.transcription}
                            </td>
                            <td className='row-control-btns'>
                                {isEditMode ?
                                    <>
                                        <button className='save-btn'>Сохранить</button>
                                        <button className='cancel-btn'><img src={cancelIcon}></img></button></> :
                                    <>
                                        <button className='edit-btn'><img src={pencilIcon}></img></button>
                                        <button className='delete-btn'><img src={deleteIcon}></img></button></>}
                            </td>
                        </tr>
                    )
                    }


                </tbody>



            </table>

            




        </React.Fragment>
    )
}

export default WordsList
