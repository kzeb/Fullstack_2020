import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const excercises1 = 10;
  const part2 = "Using props to pass data";
  const excercises2 = 7;
  const part3 = "State of a component";
  const excercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        excercises1={excercises1}
        part2={part2}
        excercises2={excercises2}
        part3={part3}
        excercises3={excercises3}
      />
      <Total
        excercises1={excercises1}
        excercises2={excercises2}
        excercises3={excercises3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
