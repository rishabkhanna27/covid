import React from 'react';
import './App.css';
import {Navigation} from './Components/NavBar/Navigation';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {About} from './Components/Tabs/About'
import {India} from './Components/Tabs/India'
import {World} from './Components/Tabs/World'
import {Myth} from './Components/Tabs/Myth'
class App extends React.Component {

  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Navigation/>
       <Switch>
         <Route path='/' component={About} exact/>
         <Route path='/India' component={India}/>
         <Route path='/World' component={World} />
         <Route path='/MythBusters' component={Myth} />
       </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
