import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my fancy routing</h2>
            <nav>
                <CustomLink to ="/">Home</CustomLink>
                <CustomLink to ="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
            
        </div>
    );
};

export default Header;