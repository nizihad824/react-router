import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my fancy routing</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link>
            </nav>
            
        </div>
    );
};

export default Header;