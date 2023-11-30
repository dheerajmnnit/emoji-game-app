import React, { useState, useEffect } from "react";
import Card from "./Card";
import { emojis } from "../constants/data";

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  useEffect(() => {
    const initialCards = emojis.concat(emojis).sort(() => Math.random() - 0.5);
    console.log(initialCards, "initialCards");
    setCards(initialCards);
  }, []);

  const handleCardClick = (index) => {
    if (disabled) return;
    if (flipped.includes(index) || solved.includes(index)) return;

    if (!firstCard) {
      setFirstCard(index);
      setFlipped((flipped) => [...flipped, index]);
    } else {
      setSecondCard(index);
      setFlipped((flipped) => [...flipped, index]);
      setDisabled(true);

      if (cards[firstCard] === cards[index]) {
        setSolved([...solved, firstCard, index]);
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }
    }
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setFlipped([]);
    setDisabled(false);
  };

  const isMathed = (index) => {
    return solved.includes(index);
  };

  return (
    <div className="game-board">
      {cards.map((emoji, index) => (
        <Card
          key={index}
          index={index}
          emoji={emoji}
          flipped={flipped.includes(index)}
          matched={isMathed(index)}
          handleClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;
