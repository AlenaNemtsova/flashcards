import React from 'react';
import TableRow from '../components/TableRow/TableRow';
import data from '../data/data.json';
import { useEffect, useRef } from 'react';

function WordsList() {
    const ref = useRef();
    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Английский</th>
                        <th>Русский</th>
                        <th>Транскрипция</th>
                        <th>Редактировать</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input ref={ref}></input>
                        </td>
                        <td>
                            <input></input>
                        </td>
                        <td>
                            <input></input>
                        </td>
                        <td>
                            <button className='save-btn'>Сохранить</button>
                        </td>
                    </tr>
                    {data.map((item) =>
                        <tr key={item.id}>

                            <TableRow item={item}></TableRow>
                        </tr>
                    )
                    }

                </tbody>

            </table>

        </React.Fragment>
    )
}

export default WordsList
