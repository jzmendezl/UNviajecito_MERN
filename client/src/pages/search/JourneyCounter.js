import React from "react";
import "./JourneyCounter.css";

function JourneyCounter({completedJourneys,totalJourneys}){

    return(
        <h3 className="JourneyCounter">
            Completed Journeys: {completedJourneys} Total Journeys : {totalJourneys}
        </h3>
    );
}

export {JourneyCounter};