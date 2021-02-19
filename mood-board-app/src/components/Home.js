import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from './assets/backgrounds/main-background.png';
import happyB from './assets/buttons/button-happy.png';
import sadB from './assets/buttons/button-sad.png';
import angryB from './assets/buttons/button-angry.png';
import scaredB from './assets/buttons/button-scared.png';
import MoodHappy from './MoodHappy';
import MoodSad from './MoodSad';
import MoodAngry from './MoodAngry';
import MoodScared from './MoodScared';

function Home(props) {
    return (
        <div className="Home-page">
            <div id="Mood">
                <img src={backgroundImg} alt="What is your mood?" width="1276px" />
            </div>

            <div className="Buttons" id="Box">
                <Link to="/MoodHappy"><img src={happyB} alt="Happy" width="275px" /></Link>
                <Link to="/MoodSad"><img src={sadB} alt="Sad" width="275px" /></Link>
                <Link to="/MoodAngry"><img src={angryB} alt="Angry" width="275px" /></Link>
                <Link to="/MoodScared"><img src={scaredB} alt="Scared" width="275px" /></Link>
            </div>
        </div>
    );
}

export default Home;