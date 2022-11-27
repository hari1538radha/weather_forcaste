import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../Images/pin.png"

const image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fwhite-cloud-blue-sky-sea_74190-4488.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fsky&tbnid=0vtjs0w6cjiOSM&vet=12ahUKEwiK-rmulbz7AhXpidgFHV6-ARUQMygDegUIARDhAQ..i&docid=17usU2X3eW1mcM&w=2000&h=1333&q=sky%20images&safe=active&ved=2ahUKEwiK-rmulbz7AhXpidgFHV6-ARUQMygDegUIARDhAQ"
const TempratureContainer = () => {
  const { weatherData, Loading } = useSelector((state) => state.educationinfo);
  const [celsius,setCelcius] = useState(0);
  useEffect(() =>
  {
    const farenhiet = weatherData?.currentConditions?.temp 
    setCelcius(Math.round(farenhiet-32*5/9))
  
    console.log(celsius)
  
  },[weatherData])
  console.log(weatherData);
  console.log(Loading);
  return (
    <div className="z-50  pt-72 bg-no-repeat  h-64 bg-cover flex items-center text-center justify-center " >
      <div className="  relative border-[1px] flex justify-between flex-col border-gray-300 rounded-3xl w-[300px] h-[500px] shadow-lg shadow-slate-300 " >
        {Loading === false && weatherData && (
          <div className="third-full-con-pro">
            {weatherData && <p>{weatherData?.resolvedAddress}</p>}
            {weatherData && <p>{celsius}<sup>o</sup>C</p>}
            {weatherData && (
              <p>{weatherData?.currentConditions?.conditions}<sup>o</sup>C </p>
            )}
          </div>
        )}
          {Loading === true && (
           <div className="third-full-con-pro">
          <p></p>
           {weatherData && (
             <p>degree</p>
           )}
         </div>
          // <div className="third-full-con-pro">
          //   <p>nodatafound</p>
          //   <img src="https://i.gifer.com/origin/1e/1eca394692a06b6bdb31383a2a1bcaf9_w200.gif"></img>
          // </div>
        )}
         <div className=" absolute bottom-0  bg-slate-200 h-[200px] w-full rounded-3xl border-[1px] border-slate-200">
          <div className="flex items-center justify-around">
          {weatherData?.currentConditions && (<p>sunrise</p>)} {weatherData?.currentConditions?.sunrise}
     {weatherData?.currentConditions && (<p>sunset</p>)} {weatherData?.currentConditions?.sunset}
          </div>
   <div>
   {weatherData?.currentConditions && (<p>humidity</p>)} {weatherData?.currentConditions?.humidity} {weatherData?.currentConditions && (<p>%</p>)}
     {weatherData?.currentConditions && (<p>pressure</p>)} {weatherData?.currentConditions?.pressure} {weatherData?.currentConditions && (<p>hPa</p>)}
   </div>
   <div>
   {weatherData?.currentConditions && (<p>windspeed</p>)} {weatherData?.currentConditions?.windspeed} {weatherData?.currentConditions && (<p>km/hr</p>)}
     {weatherData?.currentConditions && (<p>precipitation</p>)} {weatherData?.currentConditions?.dew} {weatherData?.currentConditions && (<p>%</p>)}
   </div>
    
    
     </div>
      </div>
    
    </div>
  );
};


export default TempratureContainer;
