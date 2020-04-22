import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part name={props.course.parts[0].name} excercises={props.course.parts[0].excercises} />
      <Part name={props.course.parts[1].name} excercises={props.course.parts[1].excercises} />
      <Part name={props.course.parts[2].name} excercises={props.course.parts[2].excercises} />
    </>
  );
};

export default Content;
