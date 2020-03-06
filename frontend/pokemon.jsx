import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from './util/session_api_util';
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }

    // const preloadedState = { user: window.currentUser}
    const store = configureStore(preloadedState);

    // for testing purposes
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.currentUser = currentUser;
    

    ReactDOM.render(<Root store={store}/>, root); });


// password to the real website: chubbychu1