import React, { useEffect, useState } from 'react';
import sadBg from "./assets/backgrounds/sad-background.png"
import Jokes from './Jokes.js'
import Advice from './Advice.js'
import Quotes from './Quotes.js'

function MoodSad(props) {
    return (
        <div className="Mood-page">
            <div>
                <Jokes/>
                <Advice/>
                <Quotes/>
                <img src={sadBg} alt="sad background" width="1800px" />
            </div>
        </div>
    );
}

export default MoodSad;