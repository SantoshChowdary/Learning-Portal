import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'

import SignIn from './components/Login/SignInSection';
import SignUp from './components/Login/SignUpSection';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import MyJourney from './components/MyJourney/MainSection';
import './App.css';


function App(props : any) { 
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute exact path="/" component={MyJourney} />
          <ProtectedRoute exact path="/my-journey" component={MyJourney} />
          <ProtectedRoute exact path="/other-courses" component={MyJourney} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
