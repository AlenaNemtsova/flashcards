import { useState } from 'react';
import CancelIcon from '../../assets/img/cancel2-cross-icon.svg';
import TrashBinIcon from '../../assets/img/trash-icon.svg';
import PencilIcon from '../../assets/img/pencil5-icon.svg';

function TableRow({ item }) {
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
                {isEditMode ? <input type="text" defaultValue={editedField ? editedField.english : item.english} onChange={handleChangeField}></input> : item.english}
            </td>

            <td>
                {isEditMode ? <input type="text" defaultValue={item.russian}></input> : item.russian}
            </td>
            <td>
                {isEditMode ? <input type="text" defaultValue={item.transcription}></input> : item.transcription}
            </td>
            <td className='row-control-btns'>
                {isEditMode ?
                    <>
                        <button className='save-btn'>Сохранить</button>
                        <button className='cancel-btn' onClick={handleCancel}><img src={CancelIcon} alt='cross' /></button>
                    </> :
                    <>
                        <button className='edit-btn' onClick={handleEdit}><img src={PencilIcon} alt='pencil' /></button>
                        <button className='delete-btn' ><img src={TrashBinIcon} alt='trash bin' /></button>
                    </>
                }
            </td>
        </>
    )
}

export default TableRow
