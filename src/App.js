import React from 'react';
import Header from "./Header";
import models from "./images/models.png";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={models} alt="Tesla Model S" />
    </div>
  );
}

export default App;
