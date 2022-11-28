import React from "react";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import TempratureContainer from "../Tempraturecontainer/TempratureContainer";
import DailyWeather from "../Dailyweather/DailyWeather";
import { useSelector, useDispatch } from "react-redux";
const Maincontainer = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Search />
      <div className="flex items-center justify-evenly">
        <TempratureContainer />
        <DailyWeather />
      </div>
    </div>
  );
};

export default Maincontainer;
