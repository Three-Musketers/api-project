import React, { useEffect, useState } from 'react';
import sadBg from './assets/backgrounds/sad-background.png';
import Jokes from './Jokes.js';
import Advice from './Advice.js';
import Quotes from './Quotes.js';
import {Link} from 'react-router-dom'

function MoodSad(props) {
    return (
        <div className="Mood-page" id="Sad">
            <div style={{
                backgroundImage:{sadBg}
            }}>
                    <Jokes/>
                    <Advice/>
                    <Quotes/>
                </div>
                <Link to="/"><button>Home</button></Link>
            </div>
    );
}

export default MoodSad;