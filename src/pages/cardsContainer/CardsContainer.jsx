import React, { useState } from "react";
import { useEffect, useRef } from 'react';
import data from '../../data/data.json';

import './CardsContainer.scss';
import './FlashCard.scss';
import 'animate.css';

function CardsContainer() {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [learnedWords, setLearnedWords] = useState(0);

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
    // console.log(index);
  }, [index]);

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
    // console.log(isAnimated);
    // console.log(index);
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
        <div className="prew-btn">
          <div className="prew-btn__arrow" onClick={handleClickPrev}></div>
        </div>

        <div className={(isAnimated ? "flashcard-wrapper animated" : "flashcard-wrapper")}>
          <div className='flashcard'>
            <h4 className='flashcard__title'>{data[index].tags}</h4>
            <p className='flashcard__source'>{data[index].english}</p>
            <p className='flashcard__transcription'>{data[index].transcription}</p>
            <div className="flashcard__translation">
              {pressed ? <span>{data[index].russian}</span> :
                <button className="translate-btn" onClick={handleClick} ref={ref}>Перевод</button>}
            </div>
          </div>
        </div>

        <div className="next-btn">
          <div className="next-btn__arrow" onClick={handleClickNext}></div>
        </div>

      </div>
      <div className="learned-words">
        Выучено слов: {learnedWords}/{data.length}
      </div>
    </div>
  );
}

export default CardsContainer;
