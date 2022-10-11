function JourneyCounter({completedJourneys,totalJourneys}){


    return(
        <div>
            <h3>
                Completed journeys: {completedJourneys}
            </h3>
            <h3>
                Total journeys : {totalJourneys}
            </h3>
        </div>
    );
}

export {JourneyCounter};