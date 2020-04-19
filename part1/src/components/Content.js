import React from "react";

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.excercises1}
      </p>
      <p>
        {props.part2} {props.excercises2}
      </p>
      <p>
        {props.part3} {props.excercises3}
      </p>
    </>
  );
};

export default Content;
