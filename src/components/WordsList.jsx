import React from 'react';
import './WordsList.scss';

const rows = [
    { "id": "11346", "english": "street", "transcription": "[ stri:t ]", "russian": "улица", "tags": "овощи", "tags_json": "[\"u043eu0432u043eu0449u0438\"]" },
];


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

                    {rows.map((row) => 
                            <tr>
                                <td>{row.english}</td>
                                <td>{row.russian}</td>
                                <td>{row.transcription}</td>
                                <td><button className='edit'></button><button className='delete'></button></td>
                            </tr>
                    )
                    }
                </tbody>



            </table>



        </React.Fragment>
    )
}

export default WordsList
