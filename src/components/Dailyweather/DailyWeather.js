import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DailyWeather = () => {
  const { weatherData, Loading } = useSelector((state) => state.educationinfo);
  const [celsius, setCelcius] = useState(0);
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  useEffect(() => {
    const farenhiet = weatherData?.currentConditions?.temp;
    setCelcius(Math.round(farenhiet - (32 * 5) / 9));
    if(Loading == false)
    {
        const date = new Date(weatherData?.days[0]?.datetime)
        const day = date.getDay();
        console.log(weekday[day])
      
    }
  
    console.log(celsius);
  }, [weatherData]);
  console.log(weatherData);
  console.log(Loading);
  return (
    <div className="z-50  pt-72 bg-no-repeat  h-64 bg-cover flex items-center text-center justify-center ">
      <div className="   border-[1px] flex justify-between flex-col border-gray-300 rounded-3xl w-[300px] h-[500px] shadow-lg shadow-slate-300 overflow-y-scroll no-scrollbar">
        {Loading === false && weatherData && (
          <div className="third-full-con-pro">
            {weatherData && <p>{weatherData?.resolvedAddress}</p>}
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
        <div >
          <p> Next 14 days</p>

          {Loading === false && (
            <div className="flex flex-col gap-y-3">
                {weatherData && weatherData?.days.map((obj) =>
                (
<div className=" border-[1px] rounded-t-lg border-slate-300 flex items-start pl-5 flex-col bg-gradient-to-r from-slate-100 to-neutral-200">
                <p>{obj?.datetime}</p>
                 <p>{obj.conditions}</p>
              </div>
                ))}
              
              {/* <div>
                {weatherData && <p>{weatherData?.days[2]?.datetime}</p>}
                {weatherData && <p>{weatherData?.days[2].conditions}</p>}
              </div>
              <div>
                {weatherData && <p>{weatherData?.days[3]?.datetime}</p>}
                {weatherData && <p>{weatherData?.days[3].conditions}</p>}
              </div>
              <div>
                {weatherData && <p>{weatherData?.days[4]?.datetime}</p>}
                {weatherData && <p>{weatherData?.days[4].conditions}</p>}
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyWeather;
