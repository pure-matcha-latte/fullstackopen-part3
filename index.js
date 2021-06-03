const express = require("express");
const app = express();

const persons = require("./persons");

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

const PORT = 3001;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
