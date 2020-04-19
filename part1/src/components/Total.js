import React from "react";

const Total = (props) => {
  return (
    <>
      <p>
        Number of excercises{" "}
        {props.excercises1 + props.excercises2 + props.excercises3}
      </p>
    </>
  );
};

export default Total;
