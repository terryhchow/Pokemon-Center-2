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
                    <img className="sign_in_icon" src="assets/sign_in_icon" />
                     SIGN IN / REGISTER
                </Link>
            </div>
        );
    return (
        <ul className="nav_bar">
            <li>
                <Link to="/" className="header-link">
                    <img className="logo" src="assets/centro_pokemon_logo_2_by_animedark2-daiixj4" />
                </Link>
            </li>
            <li>{display}</li>
            <li>
                <Link to="/" className="header-link">
                    <img className="cart_icon" src="assets/cart_icon" />
                </Link>
            </li>
        </ul>
    )
}


