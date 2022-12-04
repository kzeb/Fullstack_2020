import { useState } from "react";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState([]);
  const [weather, setWeather] = useState({});

  const handleCountryNameChange = async (event) => {
    if (event.target.value.length > 0) {
      await axios
        .get(`https://restcountries.com/v3.1/name/${event.target.value}`)
        .then((response) => {
          setResult(response.data);
          if (response.data.length === 1) {
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].capitalInfo.latlng[0]}&lon=${response.data[0].capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
              )
              .then((response) => {
                setWeather({
                  temperature: response.data.main.temp,
                  wind: response.data.wind.speed,
                  icon: response.data.weather[0].icon,
                });
              })
              .catch((err) => {
                setWeather({
                  temperature: "response.main.temp",
                  wind: "response.wind.speed",
                  icon: "response.weather[0].icon",
                });
              });
          }
        })
        .catch((err) => {
          setResult([]);
        });
    } else {
      setResult([]);
    }
  };

  const handleButtonClick = async (element) => {
    setResult([element]);
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${element.capitalInfo.latlng[0]}&lon=${element.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((response) => {
        setWeather({
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          icon: response.data.weather[0].icon,
        });
      })
      .catch((err) => {
        setWeather({
          temperature: "response.main.temp",
          wind: "response.wind.speed",
          icon: "response.weather[0].icon",
        });
      });
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
            <h3>languages:</h3>
            <ul>
              {Object.entries(result[0].languages).map((lang) => (
                <li key={lang[1]}>{lang[1]}</li>
              ))}
            </ul>
            <img src={result[0].flags.png} alt="FLAG" />
            <h2>Weather in {result[0].capital}</h2>
            <p>temperature {weather.temperature} Celsius</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="WEATHER_ICON"
            />
            <p>wind {weather.wind} m/s</p>
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
