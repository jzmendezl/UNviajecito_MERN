function JourneyItem(props){
    //const onComplete = () =>{
    //    alert("You just completed "+props.text)
    //};
    return(
        <li>
            <span onClick={props.onComplete} >C</span>
            <p>{props.text}</p>
            <span onClick={props.onDelete}>X</span>
        </li>
    );
}

export { JourneyItem };