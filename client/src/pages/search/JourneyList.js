import "./JourneyList.css"

function JourneyList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {JourneyList};