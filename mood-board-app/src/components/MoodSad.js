import React, { useEffect, useState } from 'react';
import sadBg from './assets/backgrounds/sad-background.png';
import Jokes from './Jokes.js';
import Advice from './Advice.js';
import Quotes from './Quotes.js';

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
            </div>
    );
}

export default MoodSad;