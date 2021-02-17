import React from 'react';
import { Link } from 'react-router-dom'



function NavBar(props) {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Jokes">Jokes</Link>
            <Link to="/Advice">Advice</Link>
            <Link to="/Quotes">Quotes</Link>
        </nav>
    );
}

export default NavBar;