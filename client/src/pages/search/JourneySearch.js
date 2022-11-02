import React from "react";
import "./JourneySearch.css"

function JourneySearch({setString,setStringFunction}){

    //const [setString,setStringFunction] = React.useState("Daddy Brian"); 
    const onChangeWriting = (event) =>{
        console.log(event.target.value);
        setStringFunction(event.target.value)
    };
    return(
        <div>
            <input 
            className="JourneySearch"
            placeholder="Busqueda de viaje"
            value = {setString}
            onChange = {onChangeWriting}
            />
        </div>
    )
}

export {JourneySearch};