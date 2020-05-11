import React from 'react';
import './App.css';
 import {Navigation} from './Components/Navigation';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import {About} from './Components/About'
import {India} from './Components/India'
import {World} from './Components/World'
import {Myth} from './Components/Myth'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Navigation/>
       <Switch>
         <Route path='/' component={About} exact/>
         <Route path='/India' component={India}/>
         <Route path='World' component={World} />
         <Route path='/Myth' component={Myth} />
       </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
