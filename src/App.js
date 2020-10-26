import React from 'react';
import Header from "./Header";
import Sea2Sky from "./images/Sea2Sky.png";
import WhatWeDo from "./WhatWeDo";
import AboutUs from "./AboutUs";
import teslawet from "./images/teslawet.png";
import bclake from "./images/bclake.png";
import charging from "./images/charging.png";
import WhyUs from "./WhyUs";
import Whistler from "./Whistler";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={Sea2Sky} alt="Tesla Model S" className="responsive" />
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
      <Whistler />
      </div>
  );
}

export default App;
