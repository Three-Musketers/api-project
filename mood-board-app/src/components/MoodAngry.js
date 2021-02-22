import React, { useEffect, useState } from 'react';
import angryBg from "./assets/backgrounds/angry-background.png";
import Jokes from './Jokes.js'
import Advice from './Advice.js'
import Quotes from './Quotes.js'

function MoodAngry(props) {
    return (
        <div className="Mood-page" id="Angry">
            <div>
                <Jokes/>
                <Advice/>
                <Quotes/>
                {/* <img src={angryBg} alt="angry background" width="1800px" /> */}
            </div>
        </div>
    );
}

export default MoodAngry;