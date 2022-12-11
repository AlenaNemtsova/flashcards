import React, { useState } from 'react'

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
                        <button className='cancel-btn' onClick={handleCancel}><img src='assets/img/cancel2-cross-icon.svg' alt='cancel button icon'></img></button>
                    </> :
                    <>
                        <button className='edit-btn' onClick={handleEdit}><img src='assets/img/pencil5-icon.svg' alt='edit button icon'></img></button>
                        <button className='delete-btn' ><img src='assets/img/trash-icon.svg' alt='delete button icon'></img></button>
                    </>
                }
            </td>
        </>
    )
}

export default TableRow
