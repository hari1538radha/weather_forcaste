import React from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../Images/pin.png"

const image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fwhite-cloud-blue-sky-sea_74190-4488.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fsky&tbnid=0vtjs0w6cjiOSM&vet=12ahUKEwiK-rmulbz7AhXpidgFHV6-ARUQMygDegUIARDhAQ..i&docid=17usU2X3eW1mcM&w=2000&h=1333&q=sky%20images&safe=active&ved=2ahUKEwiK-rmulbz7AhXpidgFHV6-ARUQMygDegUIARDhAQ"
const TempratureContainer = () => {
  const { weatherData, Loading } = useSelector((state) => state.educationinfo);
  console.log(weatherData);
  console.log(Loading);
  return (
    <div className="z-50 pt-64 bg-no-repeat  h-64 bg-cover flex items-center text-center justify-center " >
      <div className="border-[1px] border-gray-700 rounded-lg w-[400px] h-[400px] shadow-lg shadow-slate-500 " >
        {Loading === false && (
          <div className="third-full-con-pro">
            {weatherData && <p>{weatherData?.currentConditions?.temp}<sup>o</sup>C</p>}
            {weatherData && (
              <p>{weatherData?.currentConditions?.conditions}<sup>o</sup>C </p>
            )}
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

export default TempratureContainer;
