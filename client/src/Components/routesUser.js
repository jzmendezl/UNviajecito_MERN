import React from 'react'
import '../resources/css/routesUser.css'

const RoutesUser = () => {

    const addNewRouteUser = (e) => {
        e.preventDefault()
        console.log(e.target[1].value);
    }

    return (
        <div id='bodyAR'>
            <p id='titleAR'>Agregar Nueva Ruta</p>
            <form className='formAR' onSubmit={addNewRouteUser}>
                <label htmlFor="placeSource">
                    <span>Origen</span>
                    <input type="text" name='placeSource' id='placeSource' />
                </label>
                <label htmlFor="placeDestination">
                    <span>Destino</span>
                    <input type="text" name='placeDestination' id='placeDestination' />
                </label>
                <label htmlFor="dateTime">
                    <span>Fecha y Hora</span>
                    <input type='datetime-local' name='dateTime' id='dateTime' />
                </label>
                <label htmlFor="quotas">
                    <span>Cupos</span>
                    <input type="number" min={1} max={5} name='quotas' id='quotas' />
                </label>
                <label htmlFor="price">
                    <span>Precio</span>
                    <input type='number' name='price' id='price' />
                </label>
                <label htmlFor="contactForm">
                    <span>Forma de Contacto</span>
                    <input type="text" name='contactForm' id='contactForm' />
                </label>
                <label htmlFor="remark">
                    <span>Observaciones</span>
                    <input type="text" name='remark' id='remark' />
                </label>
                <button type="submit" id='btnFormAR' >Agregar</button>
            </form>
        </div>
    )
}

export default RoutesUser