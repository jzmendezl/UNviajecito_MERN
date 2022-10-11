function Travel(){
    const onClickTittle = () =>{
        alert("Testing Alerts!");
    };
    return(
        <div>
            <h1 onClick={onClickTittle}>
            Searching Page!
            </h1>
        </div>
        
    )
}

export { Travel };