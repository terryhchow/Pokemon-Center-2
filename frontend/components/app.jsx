import React from "react";
import SignupFormContainer from './session/signup_form_container';
import { Link, Switch, Route } from "react-router-dom";
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import SplashContainer from './splash/splash_container';
import ProductIndexContainer from './product/product_index_container'
import ProductShowContainer from './product/product_show_container'
import CartContainer from './cart/cart_container';
import CartShowContainer from './cart/cart_show_container'
import SearchContainer from './search/search_container'
import {AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './session/modal';

const App = () => (
    <div>
        <header>
            <Route path="/" component={NavBarContainer} />
        </header>
        <Modal/>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/products" component={ProductIndexContainer} />
            <Route exact path="/products/:productId" component={ProductShowContainer} />
            <Route exact path="/cart" component={CartContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/cart_items" component={CartShowContainer} />
            <Route path="/search" component={SearchContainer} />

        </Switch>
    </div>
);

export default App;