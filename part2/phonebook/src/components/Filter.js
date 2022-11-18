import React from "react";

const Filter = ({ handleSearchInputChange }) => {
  return (
    <>
      <p>filter shown with</p>
      <input onChange={handleSearchInputChange} />
    </>
  );
};

export default Filter;
