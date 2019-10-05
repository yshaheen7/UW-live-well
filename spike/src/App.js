import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import HouseDetails from './components/houses/HouseDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddNewHouse from './components/houses/AddNewHouse';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/house/:id' component={HouseDetails}/>
          <Route path ='/signin' component={SignIn} />
          <Route path ='/signup' component={SignUp} />
          <Route path ='/addhouse' component={AddNewHouse} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
