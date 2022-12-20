import React from "react";
import personService from "../services/persons";

const Persons = ({ searchResult, setSearchResult }) => {
  const removeFunction = (person) => {
    personService.remove(person.id).then((response) => {
      setSearchResult(searchResult.filter((one) => one.id !== person.id));
    });
    window.confirm(`Delete ${person.name} ?`);
  };

  return (
    <>
      {searchResult.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => removeFunction(person)}>Delete</button>
        </p>
      ))}
    </>
  );
};

export default Persons;
