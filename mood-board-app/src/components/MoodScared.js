import React, { useEffect, useState } from 'react';
import scaredBg from "./assets/backgrounds/scared-background.png";

function MoodScared(props) {
    return (
        <div className="Mood-page">
            <div>
                <img src={scaredBg} alt="scared background" width="1800px" />
            </div>
        </div>
    );
}

export default MoodScared;