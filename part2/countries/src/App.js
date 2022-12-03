import { useState } from "react";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState([]);

  const handleCountryNameChange = async (event) => {
    if (event.target.value.length > 0) {
      await axios
        .get(`https://restcountries.com/v3.1/name/${event.target.value}`)
        .then((response) => {
          setResult(response.data);
        })
        .catch((err) => {
          setResult([]);
        });
    } else {
      setResult([]);
    }
  };

  const handleButtonClick = (element) => {
    setResult([element]);
  };

  return (
    <div>
      find countries <input onChange={handleCountryNameChange} />
      {result.length < 10 ? (
        result.length === 1 ? (
          <>
            <h1>{result[0].name.common}</h1>
            <p>capital {result[0].capital}</p>
            <p>area {result[0].area}</p>
            <h2>languages:</h2>
            <ul>
              {Object.entries(result[0].languages).map((lang) => (
                <li key={lang[1]}>{lang[1]}</li>
              ))}
            </ul>
            <img src={result[0].flags.png} alt="FLAG" />
          </>
        ) : (
          result.map((element) => (
            <p key={element.name.common}>
              {`${element.name.common} `}
              <button onClick={() => handleButtonClick(element)}>show</button>
            </p>
          ))
        )
      ) : (
        <p>To many matches, specify another filter</p>
      )}
    </div>
  );
};

export default App;
