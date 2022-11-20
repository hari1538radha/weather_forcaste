import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Maincontainer = () => {
  const { weatherData, Loading } = useSelector((state) => state.educationinfo);
  console.log(weatherData);
  console.log(Loading);
  return (
    <div>
      <div>
        {Loading === false && (
          <div className="third-full-con-pro">
            {weatherData && <p>{weatherData.address}</p>}
          </div>
        )}
      </div>
      <div>
        {Loading === true && (
          <div className="third-full-con-pro">
            <p>nodatafound</p>
            <img src="https://i.gifer.com/origin/1e/1eca394692a06b6bdb31383a2a1bcaf9_w200.gif"></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Maincontainer;
