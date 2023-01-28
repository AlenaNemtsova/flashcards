import React, { useState } from "react";
import { useEffect } from 'react';
// import Card from "../components/Card/Card";
import data from '../data/data.json';
import 'animate.css';

function CardsContainer() {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [learnedWords, setLearnedWords] = useState(0);


  const handleClickNext = () => {
    setIsAnimated(false);
    setIndex(index >= data.length - 1 ? 0 : index + 1);
    setPressed(false);
  };

  const handleClickPrev = () => {
    setIsAnimated(false);
    setIndex(index <= 0 ? data.length - 1 : index - 1);
    setPressed(false);
  };

  useEffect(() => {
    console.log(isAnimated);
    console.log(index);
    setIsAnimated(true);
  }, [index]);

  const countWords = () => {
    setLearnedWords(learnedWords + 1);
  };
  // console.log(learnedWords);

  const handleClick = () => {
    setPressed(!pressed);
    countWords();
  };


  return (
    <div className="cards-wrapper">
      <div className="cards-container">
        <button className="back-btn" onClick={handleClickPrev}>
          <img src="assets/img/left-arrow.svg" alt="arrow to prev card" />
        </button>

        <div className={(isAnimated ? "flashcard-wrapper animated" : "flashcard-wrapper")}>
          <div className='flashcard'>
            <h4 className='flashcard__title'>{data[index].tags}</h4>
            <p className='flashcard__source'>{data[index].english}</p>
            <p className='flashcard__transcription'>{data[index].transcription}</p>
            <div className="flashcard__translation">
              {pressed ? <span>{data[index].russian}</span> :
                <button className="translate-btn" onClick={handleClick}>Перевод</button>}
            </div>
          </div>
        </div>


        <button className="forward-btn" onClick={handleClickNext} >
          <img src="assets/img/right-arrow.svg" alt="arrow to next card" />
        </button>
      </div>
    </div>
  );
}

export default CardsContainer;
