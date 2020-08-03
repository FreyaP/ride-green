import React from 'react';
import Header from "./Header";
import models from "./images/models.png";
import WhatWeDo from "./WhatWeDo";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={models} alt="Tesla Model S" className="responsive" />
      <WhatWeDo />
    </div>
  );
}

export default App;
