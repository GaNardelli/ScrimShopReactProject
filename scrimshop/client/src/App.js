import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/cards/card";

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    const obj = {
      name: values.name,
      cost: values.cost,
      category: values.category,
    };
    axios.post("http://localhost:3001/register", obj).then((response) => {
      console.log(response.name);
    });
    document.location.reload(true);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getCards").then((resp) => {
      setListGames(resp.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="register--container">
        <h1 className="registe--title">Scrim Shop</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="cost"
          placeholder="Preço do produto"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria do produto"
          className="register--input"
          onChange={handleChangeValues}
        />
        <button className="register--button" onClick={handleClickButton}>
          Cadastrar
        </button>
      </div>
      <div className="cardsDisplay">
        {typeof listGames !== "undefined" &&
          listGames.map((value, index) => {
            return (
              <Card
                key={value.idgames}
                listCard={listGames}
                setListCard={setListGames}
                id={value.idgames}
                index={index}
                name={value.name}
                cost={value.cost}
                category={value.category}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
