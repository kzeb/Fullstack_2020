import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      excercises: 10
    },
    {
      name: "Using props to pass data",
      excercises: 7
    },
    {
      name: "State of a component",
      excercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
