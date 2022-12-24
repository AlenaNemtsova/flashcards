import React, { useState } from "react";
import { useEffect } from 'react';
import Card from "../components/Card/Card";
import data from '../data/data.json';

function CardsContainer() {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [learnedWords, setLearnedWords] = useState(0);


  const handleClickForward = () => {
    setIsAnimated(false);
    setIndex(index >= data.length - 1 ? 0 : index + 1);
    setPressed(false);
  };

  const handleClickBack = () => {
    setIsAnimated(false);
    setIndex(index <= 0 ? data.length - 1 : index - 1);
    setPressed(false);
  };

  const countWords = () => {
    setLearnedWords(learnedWords + 1);
  };
  console.log(learnedWords);

  const handleClick = () => {
    setPressed(!pressed);
    countWords();
  };


  return (
    <div className="cards-wrapper">
      <div className="cards-container">
        <button className="back-btn" onClick={handleClickBack}>
          <img src="assets/img/left-arrow.svg" alt="arrow to flip back" />
        </button>

        <Card
          id={data[index].id}
          english={data[index].english}
          transcription={data[index].transcription}
          russian={data[index].russian}
          tags={data[index].tags}
          pressed={pressed}

          isAnimated={isAnimated}
          setIsAnimated={setIsAnimated}
          handleClick={handleClick}
        ></Card>


        <button className="forward-btn" onClick={handleClickForward} >
          <img src="assets/img/right-arrow.svg" alt="arrow to flip forward" />
        </button>
      </div>
    </div>
  );
}

export default CardsContainer;
