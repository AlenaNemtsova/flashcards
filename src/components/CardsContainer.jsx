import React,  { useState } from 'react';
import './CardsContainer.scss';
import FlashCard from './FlashCard';
import arrowLeft from '../assets/images/left-arrow.svg';
import arrowRight from '../assets/images/right-arrow.svg';


function CardsContainer({ rows }) {

    const [index, setIndex] = useState(0);
    
    const handleClickForward = () => {
        setIndex( index >= rows.length-1 ? 0 : index+1 );
    };

    const handleClickBack = () => {
        setIndex(index <= 0 ? rows.length-1 : index-1);
    };


    return (
        <div className='cards-container'>
            <div className='back'>
                <button className='back-btn' onClick={handleClickBack}>
                    <img src={arrowLeft} alt="arrow to flip back"/>
                </button>
            </div>

            <FlashCard id={rows[index].id} english={rows[index].english} transcription={rows[index].transcription} russian={rows[index].russian} tags={rows[index].tags}></FlashCard>
            
            <div className='forward'>

            <button className='forward-btn' onClick={handleClickForward}><img src={arrowRight} alt="arrow to flip forward" /></button>
            </div>
        </div>
    )
}

export default CardsContainer
