import React from "react";

import Navbar from "../src/components/Navbar/Navbar";
import Maincontainer from "./components/Maincontainer/Maincontainer";
import Search from "./components/Search/Search";
// import { Gym } from "./components/Gym";

function App() {
  return (
    <div className=" h-screen z-0">
      <Navbar />
      <Maincontainer />
      {/* <Gym/> */}
    </div>
  );
}

export default App;
