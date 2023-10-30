import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route, Redirect} from 'react-router'

import SignIn from './components/Login/SignInSection';
import SignUp from './components/Login/SignUpSection';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './components/Home/MainHomePage';
import MyJourney from './components/MyJourney/MainSection';
import OtherCourses from './components/OtherCourses/Main';
import Bookmarks from './components/Bookmarks/Main';
import CourseSection from './components/Course/main';
import './App.css';


function App(props : any) { 
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my-journey" component={MyJourney} />
          <ProtectedRoute exact path="/other-courses" component={OtherCourses} />
          <ProtectedRoute exact path="/bookmarks" component={Bookmarks} />
          <ProtectedRoute exact path="/playground" component={CourseSection} />
          <ProtectedRoute exact path="/code-snippets" component={Home} />
          <ProtectedRoute exact path="/discussions" component={Home} />
          <ProtectedRoute exact path="/course" component={CourseSection} />
          {/* <ProtectedRoute exact path="/course&t_id=:t_id&s_id=:s_id" component={CourseSection} /> */}
          <Route path="/not-found" component={Home} />
          <Redirect to="not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
