import React from 'react';
import { link } from 'react-router-dom'



function NavBar(props) {
    return (
        <nav>
            <link to="/">Home</link>
            <link to="/">Jokes</link>
            <link to="/">Spotify</link>
            <link to="/">Home</link>
            <link to="/">Home</link>
        </nav>
    );
}

export default NavBar;