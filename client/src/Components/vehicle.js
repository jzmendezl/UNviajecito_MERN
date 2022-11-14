


const Vehicle = ({ kind, color, plate, seats, model }) => {


    return (
        <div className='yourVehicles'>
            <p className='titleLinkUserView'>Vehiculos vinculados a tu cuenta</p>
            <ul id="fieldBody">
                <li className='viewVehicle'>

                    <p className='titleViewForm'>Tipo</p>
                    <p className='valueViewForm'>{kind}</p>

                </li>
                <li className='viewVehicle'>

                    <p className='titleViewForm'>Placa</p>
                    <p className='valueViewForm'>{plate}</p>

                </li>
                <li className='viewVehicle'>

                    <p className='titleViewForm'>Modelo</p>
                    <p className='valueViewForm'>{model}</p>

                </li>
                <li className='viewVehicle'>

                    <p className='titleViewForm'>Color</p>
                    <p className='valueViewForm'>{color}</p>

                </li>
                <li className='viewVehicle'>

                    <p className='titleViewForm'>Puestos</p>
                    <p className='valueViewForm'>{seats}</p>

                </li>
            </ul>
        </div>
    )
}

export default Vehicle