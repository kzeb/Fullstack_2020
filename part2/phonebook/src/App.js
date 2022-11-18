import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchResult, setSearchResult] = useState(persons);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.find((person) => person.name === personObject.name)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setSearchResult(searchResult.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchResult(
      persons.filter((person) =>
        person.name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      )
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchInputChange={handleSearchInputChange} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      <Persons searchResult={searchResult} />
    </div>
  );
};

export default App;
