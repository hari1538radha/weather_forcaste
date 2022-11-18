import React from "react";
import { useEffect, useState } from "react";

function App() {
  const datasss = [];
  const handelclick = (e) => {
    e.preventDefault();
    const datas = fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/coimbatore?unitGroup=us&key=7XTCGNF3ZVWDYVF8TCHLTKW6C&contentType=json"
    );
    datas
      .then((response) => response.json())
      .then((data) => datasss.push(data));
  };
  useEffect(() => {
    console.log(datasss[0]);
  }, []);

  return (
    <div className="App">
      Hi
      <div>
        <p>vhj{datasss[0]?.latitude}</p>
      </div>
      <button onClick={handelclick}>hello</button>
    </div>
  );
}

export default App;
