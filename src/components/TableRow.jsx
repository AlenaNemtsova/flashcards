import React, { useState } from 'react'
import pencilIcon from '../assets/images/pencil5-icon.svg';
import deleteIcon from '../assets/images/trash-icon.svg';
import cancelIcon from '../assets/images/cancel2-cross-icon.svg'


function TableRow({ row }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedField, setEditedField] = useState('');

    const handleEdit = () => {
        setIsEditMode(!isEditMode);
    }

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    const handleChangeField = (event) => {
        setEditedField(event.target.value);
        console.log(event.target.value);
    }
    

    return (
        <>
            <td>
                {isEditMode ? <input type="text" defaultValue={editedField ? editedField.english : row.english} onChange={handleChangeField}></input> : row.english}
            </td>

            <td>
                {isEditMode ? <input type="text" defaultValue={row.russian}></input> : row.russian}
            </td>
            <td>
                {isEditMode ? <input type="text" defaultValue={row.transcription}></input> : row.transcription}
            </td>
            <td className='row-control-btns'>
                {isEditMode ?
                    <>
                        <button className='save-btn'>Сохранить</button>
                        <button className='cancel-btn' onClick={handleCancel}><img src={cancelIcon}></img></button>
                    </> :
                    <>
                        <button className='edit-btn' onClick={handleEdit}><img src={pencilIcon}></img></button>
                        <button className='delete-btn' ><img src={deleteIcon}></img></button>
                    </>
                }
            </td>
        </>
    )
}

export default TableRow
