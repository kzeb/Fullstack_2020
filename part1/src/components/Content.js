import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part name={props.part1.name} excercises={props.part1.excercises} />
      <Part name={props.part2.name} excercises={props.part2.excercises} />
      <Part name={props.part3.name} excercises={props.part3.excercises} />
    </>
  );
};

export default Content;
