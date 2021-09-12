import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar  from './components/navbar/navbar.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/sancus' exact component={Homepage} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
