import React, { useState } from "react";
import "./card.css";
import axios from "axios";

export default function Card(props) {
  const { name, cost, category, id, listCard, setListCard, index } = props;
  const editing = true;
  const handleDeleteButton = function () {
    axios
      .delete(`http://localhost:3001/delete/`, { data: { id: id } })
      .then((resp) => {
        let listCard = listCard.split(index, 1);
        setListCard(() => ({
          ...listCard,
        }));
      });
    document.location.reload(true);
  };

  return (
    <div className="cardGame--container">
      <h2 className="cardGame--title">{name}</h2>
      <p className="cardGame--cost">{cost}</p>
      <p className="cardGame--category">{category}</p>
      <button onClick={handleDeleteButton} className="cardGame--btn__delete">
        Deletar Card
      </button>
    </div>
  );
}
