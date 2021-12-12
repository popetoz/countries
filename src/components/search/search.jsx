import React from "react";
const SearchBox = ({ placeholder, changeHandler }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={changeHandler} />
  );
};

export default SearchBox;
