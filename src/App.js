import React from 'react';
import './App.scss';
import {Navigation} from './Components/NavBar/Navigation';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {About} from './Components/Tabs/About/About'
import {India} from './Components/Tabs/India'
import {World} from './Components/Tabs/World'
import {Formdata} from './Components/Tabs/Form/Form'
import {DataRed} from './Components/Tabs/Form/DataRed'
import {DataGreen} from './Components/Tabs/Form/DataGreen'
import {DataOrange} from './Components/Tabs/Form/DataOrange'


import {Myth} from './Components/Tabs/MythBuster/Myth'
class App extends React.Component {

  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Navigation/>
       <Switch>
         <Route path='/' component={About} exact/>
         <Route path='/DataGreen' component={DataGreen}/>
         <Route path='/DataOrange' component={DataOrange}/>
         <Route path='/DataRed' component={DataRed}/>
         <Route path='/Form' component={Formdata}/>
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
