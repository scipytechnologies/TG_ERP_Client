import React from 'react'
import './splash.css'
import BeatLoader from "react-spinners/BeatLoader";
// import { BoxesLoader } from "react-awesome-loaders";

function Splash() {
    return (
        <div className="splash-loader">
            <p>Please hold on for a moment as we work on building your dashboard.</p>
            <BeatLoader
                color="#506fd9"
                size={26}
                speedMultiplier={1}
            />

            {/* <BoxesLoader
                boxColor={"#6366F1"}
                style={{ marginBottom: "20px" }}
                desktopSize={"128px"}
                mobileSize={"80px"}
            /> */}
        </div>
    )
}

export default Splash