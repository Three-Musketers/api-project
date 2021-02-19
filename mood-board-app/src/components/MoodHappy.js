import React, { useEffect, useState } from 'react';
import happyBg from './assets/backgrounds/happy-background.png';

function MoodHappy(props) {
    
    return (
        <div className="Mood-page">
            <div>
                <img src={happyBg} alt="happy background" width="1800px" />
            </div>
        </div>
    );
}

export default MoodHappy;