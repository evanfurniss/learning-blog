import React from "react";
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route component={Home} exact path='/' />
      </Router>
    </>
  )
}

export default App;