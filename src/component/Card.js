import React from "react";

const Card = ({ index, emoji, flipped, matched, handleClick }) => {
  const handleCardClick = () => {
    handleClick(index);
  };

  return (
    <div
      className={`card ${flipped ? "flipped" : ""} ${matched ? "matched1" : ""}`}
      onClick={handleCardClick}
    >
      {flipped || matched ? emoji : ""}
    </div>
  );
};

export default Card;
