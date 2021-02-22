import React, { useEffect, useState } from 'react';
import scaredBg from "./assets/backgrounds/scared-background.png";
import Jokes from './Jokes.js'
import Advice from './Advice.js'
import Quotes from './Quotes.js'

function MoodScared(props) {
    return (
        <div className="Mood-page" id="Scared">
            <div>
                <Jokes/>
                <Advice/>
                <Quotes/>
                {/* <img src={scaredBg} alt="scared background" width="1800px" /> */}
            </div>
        </div>
    );
}

export default MoodScared;