import React from 'react'

const Test = () => {
    const array1 = [{ id: 1, color: 'rojo' }, { id: 2, color: 'Verde' }, { id: 3, color: 'Azul' }];

    const iterator1 = array1.entries();

    // console.log(iterator1.next().value);
    // // expected output: Array [0, "a"]

    // console.log(iterator1.next().value);
    // expected output: Array [1, "b"]


    console.log(iterator1.next().value);
    console.log(iterator1.next().value);
    console.log(iterator1.next().value);


    return (
        <div>test</div>
    )
}

export default Test