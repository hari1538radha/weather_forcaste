import React from "react";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import TempratureContainer from "../Tempraturecontainer/TempratureContainer";

const Maincontainer = () => {
  return (
    <div>
      <Search />
      <TempratureContainer />
    </div>
  );
};

export default Maincontainer;
