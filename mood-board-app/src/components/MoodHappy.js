import React, { useEffect, useState } from 'react';
import happyBg from './assets/backgrounds/happy-background.png';
import Jokes from './Jokes.js'
import Advice from './Advice.js'
import Quotes from './Quotes.js'

function MoodHappy(props) {
    
    return (
        <div className="Mood-page" id="Happy">
            <div style={{
                backgroundImage: {happyBg}
            }}>
                <Jokes/>
                <Advice/>
                <Quotes/>
                {/* <img src={happyBg} alt="happy background" width="1800px" /> */}
            </div>
        </div>
    );
}

export default MoodHappy;