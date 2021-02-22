import React, { useEffect, useState } from 'react';
import sadBg from './assets/backgrounds/sad-background.png';
import Jokes from './Jokes.js';
import Advice from './Advice.js';
import Quotes from './Quotes.js';
import {Link} from 'react-router-dom'
import facebutton from './assets/buttons/mood-logo.png'

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
                <div ><Link to="/"><img src = {facebutton} alt = "faces" style= {{width: "30vw", height: "15vh"}}/></Link></div>
            </div>
    );
}

export default MoodSad;