import React from "react";

import Navbar from "../src/components/Navbar/Navbar";
import Maincontainer from "./components/Maincontainer/Maincontainer";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className=" h-screen bg-gradient-to-br from-[#536976] to-[#292e49]">
      <Navbar />
      <Maincontainer />
      <Search />
    </div>
  );
}

export default App;
