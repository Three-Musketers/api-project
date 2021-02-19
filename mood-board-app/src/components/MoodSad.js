import React, { useEffect, useState } from 'react';
import sadBg from "./assets/backgrounds/sad-background.png"

function MoodSad(props) {
    return (
        <div className="Mood-page">
            <div>
                <img src={sadBg} alt="sad background" width="1800px" />
            </div>
        </div>
    );
}

export default MoodSad;