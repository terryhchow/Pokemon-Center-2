import React from "react";
import SignupFormContainer from './session/signup_form_container';
import { Link, Switch, Route } from "react-router-dom";
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import SplashContainer from './splash/splash_container';
import {AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <Route path="/" component={NavBarContainer} />
        </header>
        <Switch>
            
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;