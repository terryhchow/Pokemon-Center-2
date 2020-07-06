import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';


export default ({ currentUser, openModal }) => {
    const account = currentUser ? (
        <div>
            <h1 className='sign_in_name' onClick={() => openModal('logout')}>{currentUser.name}</h1>
        </div >
    ) : (
        <div>

            <span onClick={() => openModal('login')}>
                    <img className='sign_in_icon' src={window.sign_in_icon}/>
            </span>
        </div >
        );
    return (
        <div>
        <ul className="nav_bar">
            <li>
                <Link to="/" className="header-link">
                    <img className="logo" src={window.pokemon_logo} />
                </Link>
            </li>
            <li><SearchBarContainer/>
            </li>
            <li>{account}</li>
            <li>
                <Link to="/cart" className="header-link">
                    <img className="cart_icon" src={window.cart_icon} />
                </Link>
            </li>
            <br/>
        </ul>
            <Link to="/products">
                <img className="nav2" src={nav2}/>
            </Link>
            <h1 className="free-ship">Free Shipping on All Orders over $50!</h1>
        </div>
    )
}



