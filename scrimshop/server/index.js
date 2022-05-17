const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "gamesdatabase",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, resp) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let query = "INSERT INTO games (name, cost, category) VALUES (?,?,?)";

  db.query(query, [name, cost, category], (err, res) => {
    if (err) {
      console.log(error);
      return;
    }
  });
});

app.get("/getCards", (req, resp) => {
  let query = "SELECT * FROM games";

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    resp.send(result);
  });
});

app.delete("/delete/", (req, resp) => {
  const { id } = req.body;
  console.log(id);

  let query = "DELETE FROM games WHERE idgames = ? limit 1";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    resp.send(result);
  });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});
