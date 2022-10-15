import React, { useEffect, useState } from 'react'
import { useUsers } from '../context/userContext'
import '../resources/css/routesUser.css'

const RoutesUser = () => {

    const { currentUser, addTravel } = useUsers()

    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')
    const [date, setDate] = useState('')
    const [seats, setSeats] = useState('')
    const [price, setPrice] = useState(0)
    const [contactForm, setContactForm] = useState('')
    const [remark, setRemark] = useState('')
    const [userVehicle, setUserVehicle] = useState([])
    const [vehicleToTravel, setVehicleToTravel] = useState(null)

    useEffect(() => {
        setUserVehicle(currentUser.vehicle)
    }, [])

    const [travel, setTravel] = useState(null)
    // console.log(travel);
    // console.log(vehicleToTravel);
    // console.log(userVehicle);

    const addNewRouteUser = async (e) => {
        e.preventDefault()


        const newTravel = {
            userName: currentUser.userName,
            contact: contactForm,
            vehicle: userVehicle[vehicleToTravel],
            source: source,
            destiny: destination,
            date: Date.parse(date),
            seats: parseInt(seats),
            price: parseInt(price),
            remark: remark
        }
        setTravel(newTravel)

        // const res = await addTravel(newTravel)
        // console.log(res);
        console.log(newTravel);

    }

    const sendRoute = () => {

    }


    return (
        <div id='bodyAR'>
            <p id='titleAR'>Agregar Nueva Ruta</p>
            <form className='formAR' onSubmit={addNewRouteUser}>
                <label htmlFor="placeSource">
                    <span>Origen</span>
                    <input type="text" name='placeSource' id='placeSource' onChange={e => setSource(e.target.value)} />
                </label>
                <label htmlFor="placeDestination">
                    <span>Destino</span>
                    <input type="text" name='placeDestination' id='placeDestination' onChange={e => setDestination(e.target.value)} />
                </label>
                <label htmlFor="dateTime">
                    <span>Fecha y Hora</span>
                    <input type='datetime-local' name='dateTime' id='dateTime' onChange={e => setDate(e.target.value)} />
                </label>
                <label htmlFor="quotas">
                    <span>Cupos</span>
                    <input type="number" min={1} max={5} name='quotas' id='quotas' onChange={e => setSeats(e.target.value)} />
                </label>
                <label htmlFor="price">
                    <span>Precio</span>
                    <input type='number' name='price' id='price' onChange={e => setPrice(e.target.value)} />
                </label>
                <label htmlFor="contactForm">
                    <span>Forma de Contacto</span>
                    <div id='contactForm'>
                        <label htmlFor="email">
                            <input type="radio" name="contact" id="email" value={currentUser.email} onClick={e => setContactForm(e.target.value)} />
                            <p>Correo</p>
                        </label>
                        <label htmlFor="celphone">
                            <input type="radio" name="contact" id="celphone" value={currentUser.celPhone} onClick={e => setContactForm(e.target.value)} />
                            <p>Celular</p>
                        </label>
                    </div>
                </label>
                <label htmlFor="remark">
                    <span>Observaciones</span>
                    <input type="text" name='remark' id='remark' onChange={e => setRemark(e.target.value)} />
                </label>
                <label htmlFor="vehicle">
                    {/* <span>Observaciones</span> */}
                    <select name="vehicle" id="vehicle" onChange={e => setVehicleToTravel(e.target.value)}>
                        {
                            userVehicle.map((vehicle, index) => (
                                <option value={index} >
                                    {vehicle.plate}
                                </option>
                            ))
                        }
                    </select>

                </label>
                <button type="submit" id='btnFormAR' onClick={sendRoute}>Agregar</button>
            </form>
        </div>
    )
}

export default RoutesUser