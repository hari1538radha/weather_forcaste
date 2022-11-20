import React from "react";
import Map from "../Images/international.png";
import Menu from "../Images/weather-app.png";
import Settings from "../Images/settings.png";
import Location from "../Images/pin.png";
import Notifiocation from "../Images/notification.png";
const Navbar = () => {
  return (
    <div>
      <div className=" border-b-[.9px] border-slate-400 flex items-center justify-between ">
        <div className=" pl-10 flex items-center justify-center">
          <img className="h-18 mr-3" src={Map}></img>
          <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-sky-400 text-4xl">
            Weatherfy
          </p>
        </div>
        <div className="flex p-5 gap-x-10 pr-14">
          <div className="flex gap-y-2 flex-col justify-center items-center">
            <img className="w-8" src={Menu}></img>
            <label className=" font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-sky-400">
              Menu
            </label>
          </div>
          <div className="flex gap-y-2  flex-col justify-center items-center">
            <img src={Location} className="w-8"></img>
            <label className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-sky-400">
              Location
            </label>
          </div>
          <div className="flex gap-y-2  flex-col justify-center items-center">
            <img src={Settings} className="w-8"></img>
            <label className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-sky-400">
              Settings
            </label>
          </div>
          <div className="flex gap-y-2  flex-col justify-center items-center">
            <img className="w-8" src={Notifiocation}></img>
            <label className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-sky-400">
              Notification
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
