import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} excercises={props.excercises1} />
      <Part part={props.part2} excercises={props.excercises2} />
      <Part part={props.part3} excercises={props.excercises3} />
    </>
  );
};

export default Content;
