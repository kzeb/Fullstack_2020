import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import ErrorMessage from "./components/ErrorMessage";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchResult, setSearchResult] = useState(persons);
  const [notification, setNotification] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setSearchResult(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    let repeat = persons.find((person) => person.name === personObject.name);
    if (repeat) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .update(repeat.id, personObject)
          .then((returnedPerson) => {
            personService.getAll().then((initialPersons) => {
              console.log(initialPersons);
              setSearchResult(initialPersons);
              setPersons(initialPersons);
              setNewName("");
              setNewNumber("");
              setNotification(`Updated number of ${personObject.name}`);
              setTimeout(() => {
                setNotification(null);
              }, 3000);
            });
          })
          .catch((error) => {
            setErrorMessage(
              `Information of ${personObject.name} has already been removed from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            personService.getAll().then((initialPersons) => {
              setSearchResult(initialPersons);
              setPersons(initialPersons);
              setNewName("");
              setNewNumber("");
            });
          });
      }
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setSearchResult(searchResult.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setNotification(`Added ${personObject.name}`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      });
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
      <Notification message={notification} />
      <ErrorMessage message={errorMessage} />
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
      <Persons searchResult={searchResult} setSearchResult={setSearchResult} />
    </div>
  );
};

export default App;
