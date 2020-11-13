import React from 'react';
import Header from "./Header";

import WhatWeDo from "./WhatWeDo";
import AboutUs from "./AboutUs";
import teslawet from "./images/teslawet.png";
import bclake from "./images/bclake.png";
import charging from "./images/charging.png";
import WhyUs from "./WhyUs";


import './App.css';
// <img src={Trees} alt="Tesla Model S" className="responsive" />

function App() {
  return (
    <div className="App">
      <Header />
      
      <WhatWeDo />
      <div className="row">
        <WhyUs  />
      </div>
      <div className="row">
        <div className="col-4">
          <AboutUs title="Sustainability" img={teslawet}/>
        </div>
        <div className="col-4">
          <AboutUs title="Mission" img={bclake}/>
        </div>
        <div className="col-4">
          <AboutUs title="Fleet" img={charging}/>
        </div>
      </div>
      
      </div>
  );
}

export default App;
