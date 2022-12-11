import React from 'react';
import TableRow from '../TableRow/TableRow';

function WordsList({ rows }) {

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
                        <tr key={row.id}>

                            <TableRow row={row}></TableRow>
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
