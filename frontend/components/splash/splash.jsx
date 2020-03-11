import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user }) => (
    <div className="splash">
        <h1 className="free-ship">Free Shipping on All Orders over $50!</h1>
        <Link to="/products">
            <img className="top-banner" src={window.pikachu_banner} />
        </Link>
        <br/>
        <Link to="/products">
            <img className="banner" src={window.starter_banner} />
        </Link>
        <Link to="/products/25">
            <img className="banner" src={window.vaporeon_banner} />
        </Link>
    </div>
);

