import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import GifDetail from './components/GifDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container-fluid px-0'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={GifDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
