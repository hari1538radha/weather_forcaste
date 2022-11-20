import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducationInfo } from "../../Store/Slice/Slice";

const Search = () => {
  const dispath = useDispatch();
  const handelclick = () => {
    dispath(getEducationInfo());
  };
  return (
    <div>
      <input type="text" placeholder="enter the loation"></input>
      <button onClick={handelclick} className="">
        hello
      </button>
    </div>
  );
};

export default Search;
