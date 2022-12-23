import React from 'react';
import TableRow from '../components/TableRow/TableRow';
import data from '../data/data.json';

function WordsList() {

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
                    {data.map((item) =>
                        <tr key={item.id}>

                            <TableRow item={item}></TableRow>
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
