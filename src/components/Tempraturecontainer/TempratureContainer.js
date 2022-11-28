import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../Images/pin.png";
import sunrise from "../Images/sunrise.png"
import sunset from "../Images/sea.png"
import humidity  from "../Images/humidity.png"
import gauge from "../Images/gauge.png"
import windspeed from "../Images/wind-direction.png"
import rain from "../Images/rain.png"


const TempratureContainer = () => {
  const { weatherData, Loading } = useSelector((state) => state.educationinfo);
  const [celsius, setCelcius] = useState(0);
  useEffect(() => {
    const farenhiet = weatherData?.currentConditions?.temp;
    setCelcius(Math.round(farenhiet - (32 * 5) / 9));

    console.log(celsius);
  }, [weatherData]);
  console.log(weatherData);
  console.log(Loading);
  return (
    <div className="z-50  pt-72 bg-no-repeat  h-64 bg-cover flex items-center text-center justify-center ">
      <div className="  relative border-[1px] flex justify-between flex-col border-gray-300 rounded-3xl w-[300px] h-[500px] shadow-lg shadow-slate-300 ">
        {Loading === false && weatherData && (
          <div className="third-full-con-pro">
            {weatherData && <p>{weatherData?.resolvedAddress}</p>}
            {weatherData && (
              <p>
                {celsius}
                <sup>o</sup>C
              </p>
            )}
            {weatherData && (
              <p>
                {weatherData?.currentConditions?.conditions}
                <sup>o</sup>C{" "}
              </p>
            )}
          </div>
        )}
        {Loading === true && (
          <div className="third-full-con-pro">
            <p></p>
            {weatherData && <p>degree</p>}
          </div>
          // <div className="third-full-con-pro">
          //   <p>nodatafound</p>
          //   <img src="https://i.gifer.com/origin/1e/1eca394692a06b6bdb31383a2a1bcaf9_w200.gif"></img>
          // </div>
        )}
        <div className="  absolute bottom-0  bg-slate-200 h-[200px] w-full rounded-3xl border-[1px] border-slate-200">
          <div className="flex pb-4 items-center justify-around">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
              <img className="w-8 mr-2" src={sunrise}></img>
              {weatherData?.currentConditions && <p>sunrise</p>}{" "}
              </div>
              
             
              <p> {weatherData?.currentConditions?.sunrise}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <img className="w-8 mr-3" src={sunset}></img>
              <p> {weatherData?.currentConditions && <p>sunset</p>} </p>
              </div>
              <p>{weatherData?.currentConditions?.sunset}</p>
            </div>
          </div>
          <div className="flex pb-4 items-center justify-around">
            <div className="flex flex-col items-center justify-center">
             <div className="flex items-center justify-center">
              <img className="w-6 mr-3" src={humidity}></img>
             <p>{weatherData?.currentConditions && <p>humidity</p>} </p>
             </div>
              <p className="flex">
                {" "}
                {weatherData?.currentConditions?.humidity}
                {weatherData?.currentConditions && <p>%</p>}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <img className="w-8 mr-3" src={gauge}></img>
            <p> {weatherData?.currentConditions && <p>pressure</p>} </p>
            </div>
              <p className="flex">
                {" "}
                {weatherData?.currentConditions?.pressure}{" "}
                {weatherData?.currentConditions && <p>hPa</p>}
              </p>
            </div>
          </div>
          <div className="flex pb-4 items-center justify-around">
            <div className="flex flex-col items-center justify-center">
         <div className="flex items-center justify-center">
          <img className="w-8 mr-3" src={windspeed}></img>
         <p>  {weatherData?.currentConditions && <p>windspeed</p>}{" "}</p>
         </div>
          <p className="flex">
          {weatherData?.currentConditions?.windspeed}{" "}
            {weatherData?.currentConditions && <p>km/hr</p>}
          </p>
            </div>
           <div className="flex flex-col items-center justify-center">
           <div className="flex iktems-center justify-center">
            <img className="w-8 mr-3" src={rain}></img>
           <p>
            {weatherData?.currentConditions && <p>precipitation</p>}{" "}
           
            </p>
           </div>
            <p className="flex">
            {weatherData?.currentConditions?.dew}{" "}
            {weatherData?.currentConditions && <p>%</p>}
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempratureContainer;
