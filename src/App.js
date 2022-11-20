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
 console.log(Loading)
  return (
    <div className="App">
      Hi
      <div>
      <div>
        {Loading === true && (
        <div className="third-full-con-pro">
         <p>nodatafound</p>
         <img src="https://i.gifer.com/origin/1e/1eca394692a06b6bdb31383a2a1bcaf9_w200.gif"></img>
          </div>
          )
      }
        </div>
        <div>
        {Loading === false && (
        <div className="third-full-con-pro">
          {weatherData && 
          <p>{weatherData.latitude}</p>
          }
          </div>
          )
      }
        </div>
    
      </div>
      <button onClick={handelclick}>hello</button>
    </div>
  );
}

export default App;
