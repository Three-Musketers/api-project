import React, { useEffect, useState } from 'react';
import angryBg from "./assets/backgrounds/angry-background.png";
import Jokes from './Jokes.js'
import Advice from './Advice.js'
import Quotes from './Quotes.js'
import {Link} from 'react-router-dom'

function MoodAngry(props) {
    return (
        <div className="Mood-page" id="Angry">
            <div>
                <Jokes/>
                <Advice/>
                <Quotes/>
                {/* <img src={angryBg} alt="angry background" width="1800px" /> */}
            </div>
            <Link to="/"><button className= "HomeBtn">Home</button></Link>
        </div>
    );
}

export default MoodAngry;