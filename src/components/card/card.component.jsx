import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        className="image"
        src={`https://robohash.org/${props.monster.id}`}
        alt="places"
      />
      <h1>{props.monster.name}</h1> <p>{props.monster.email}</p>
    </div>
  );
};
