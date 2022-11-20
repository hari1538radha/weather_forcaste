import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducationInfo } from "./Store/Slice/Slice";

function App() {
  const dispath = useDispatch();
 const handelclick = () =>{
  dispath(getEducationInfo())
 }
 const{ weatherData,Loading} = useSelector(state => state.educationinfo)
 console.log(weatherData)
  return (
    <div className="App">
      Hi
      <div>
      </div>
      <button onClick={handelclick}>hello</button>
    </div>
  );
}

export default App;
