import "./JourneyItem.css"

function JourneyItem(props){
    //const onComplete = () =>{
    //    alert("You just completed "+props.text)
    //};
    return(
        <li className="JourneyItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}>
                √
            </span>
            <p className={`JourneyItem-p ${props.completed && 'JourneyItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}>
                X
            </span>
        </li>
    );
}

export { JourneyItem };