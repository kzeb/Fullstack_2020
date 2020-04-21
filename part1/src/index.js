import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
