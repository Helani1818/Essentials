import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './componenets/header/Header'
import Body from './componenets/body/Body'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Router>
  );
}

export default App;
