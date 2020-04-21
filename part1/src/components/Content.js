import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} excercises={props.parts[0].excercises} />
      <Part name={props.parts[1].name} excercises={props.parts[1].excercises} />
      <Part name={props.parts[2].name} excercises={props.parts[2].excercises} />
    </>
  );
};

export default Content;
