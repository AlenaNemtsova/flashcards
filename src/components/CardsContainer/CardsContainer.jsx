import React, { useState } from "react";
import { useRef, useEffect } from 'react';
import FlashCard from "../FlashCard/FlashCard";

function CardsContainer({ rows }) {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [animationStart, setAnimationStart] = useState(false);
  const [learnedWords, setLearnedWords] = useState(0);

  const ref = useRef(null);
  useEffect(() => ref.current.focus(), [index]);

  const handleClickForward = () => {
    setAnimationStart(false);
    setIndex(index >= rows.length - 1 ? 0 : index + 1);
    setPressed(false);
  };

  const handleClickBack = () => {
    setAnimationStart(false);
    setIndex(index <= 0 ? rows.length - 1 : index - 1);
    setPressed(false);
  };

  const countWords = () => {
    setLearnedWords(learnedWords + 1);
  };
  console.log(learnedWords);


  return (
    <div className="cards-wrapper">
      <div className="cards-container">
        <button className="back-btn" onClick={handleClickBack}>
          <img src="assets/img/left-arrow.svg" alt="arrow to flip back" />
        </button>

        <FlashCard
          id={rows[index].id}
          english={rows[index].english}
          transcription={rows[index].transcription}
          russian={rows[index].russian}
          tags={rows[index].tags}
          pressed={pressed}
          setPressed={setPressed}
          animationStart={animationStart}
          setAnimationStart={setAnimationStart}
          countWords={countWords}
          ref={ref}
        ></FlashCard>


        <button className="forward-btn" onClick={handleClickForward} >
          {/* <button className="forward-btn" onClick={handleClickForward} onAnimationEnd={() => setAnimationStart(false)} > */}
          <img src="assets/img/right-arrow.svg" alt="arrow to flip forward" />
        </button>
      </div>
    </div>
  );
}

export default CardsContainer;
