import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducationInfo } from "../../Store/Slice/Slice";
import search from "../Images/search.png";
const Search = () => {
  const dispath = useDispatch();
  const handelclick = (e) => {
    e.preventDefault();
  const data =  e.target.elements[0].value
  console.log(data)
    dispath(getEducationInfo(data));
    e.target.elements[0].value = ""
  };
  return (
    <form onSubmit={handelclick}>
    <div className="flex  mt-10 items-center justify-center relative">
      
      <input
        className="w-4/5 h-9 text-black rounded-xl bg-gradient-to-br opacity-100 border-[0.500px] border-slate-400 text-center"
        type="text"
        placeholder="Enter the location"
      ></input>
      <button className="">
        <img className=" absolute  left-[87%] top-[2px] h-8" src={search}></img>
      </button>
     
    </div>
    </form>

  );
};

export default Search;
