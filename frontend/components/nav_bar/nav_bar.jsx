import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>{currentUser.name}</h3>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">
                    <h1><span><img src={window.sign_in_icon}/></span>SIGN IN / REGISTER</h1>
                </Link>
            </div>
        );
    return (
        <ul className="nav_bar">
            <li>
                <Link to="/" className="header-link">
                    <img src={window.pokemon_logo}/>
                </Link>
            </li>
            <li>{display}</li>
            <li>
                <Link to="/" className="header-link">
                    <img src={window.cart_icon} />
                </Link>
            </li>
        </ul>
    )
}


