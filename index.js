const express = require("express");
const morgan = require("morgan");
let persons = require("./persons");

const app = express();
app.use(express.json());

morgan.token("request-body", (req, res) =>
  req.method === "POST" ? JSON.stringify(req.body) : ""
);

const morganFormatString =
  ":method :url :status :res[content-length] - :response-time ms :request-body";
app.use(morgan(morganFormatString));

app.get("/info", (req, res) => {
  res.send(
    `Phonebook has information for ${persons.length} people<br />${new Date()}`
  );
});

app.get("/api/persons", (req, res) => res.json(persons));

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

const generateId = () => Math.floor(Math.random() * 1e6);

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  if (!name) {
    return res.status(400).json({ error: "The name is missing" });
  }
  if (!number) {
    return res.status(400).json({ error: "The number is missing" });
  }

  const isPersonExist = persons.find((person) => person.name === name);
  if (isPersonExist) {
    return res
      .status(400)
      .json({ error: "The name already exists in the phonebook" });
  }

  const person = { id: generateId(), name, number };
  persons = persons.concat(person);
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
