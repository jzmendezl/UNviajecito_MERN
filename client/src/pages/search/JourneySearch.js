import React from "react";

function JourneySearch({setString,setStringFunction}){

    //const [setString,setStringFunction] = React.useState("Daddy Brian"); 
    const onChangeWriting = (event) =>{
        console.log(event.target.value);
        setStringFunction(event.target.value)
    };
    return(
        <div>
            <input
            placeholder="Busqueda de viaje"
            value = {setString}
            onChange = {onChangeWriting}
            />
            <p>
                {setString}
            </p>
        </div>
    )
}

export {JourneySearch};