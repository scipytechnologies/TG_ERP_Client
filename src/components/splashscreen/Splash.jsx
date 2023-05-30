import React from 'react'
import './splash.css'
import BeatLoader from "react-spinners/BeatLoader";

function Splash() {
    return (
        <div className="splash-loader">
            <p>Please hold on for a moment as we work on building your dashboard.</p>
            <BeatLoader
                color="#506fd9"
                size={26}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Splash