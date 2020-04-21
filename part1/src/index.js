import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    excercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    excercises: 7
  }
  const part3 = {
    name: "State of a component",
    excercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
