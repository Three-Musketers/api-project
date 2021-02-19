import React, { useEffect, useState } from 'react';
import angryBg from "./assets/backgrounds/angry-background.png";

function MoodAngry(props) {
    return (
        <div className="Mood-page">
            <div>
                <img src={angryBg} alt="angry background" width="1800px" />
            </div>
        </div>
    );
}

export default MoodAngry;