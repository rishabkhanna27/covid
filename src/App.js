import React from 'react';
import './App.scss';
import {Navigation} from './Components/NavBar/Navigation';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {About} from './Components/Tabs/About/About'
import {India} from './Components/Tabs/India'
import {World} from './Components/Tabs/World'
import {Formdata} from './Components/Tabs/Form/Form'
import {View} from './Components/Tabs/list/View'

import {Myth} from './Components/Tabs/MythBuster/Myth'
class App extends React.Component {

  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Navigation/>
       <Switch>
       <Route path='/covid/' component={India} exact/>
         <Route path='/covid/About' component={About} />
         <Route path='/covid/Form' component={Formdata}/>
         <Route path='/covid/World' component={World}  />
         <Route path='/covid/MythBusters' component={Myth} />
         <Route path='/covid/View' component={View} />

       </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
