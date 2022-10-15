import { useState } from 'react'
import Header from '../Components/header'
import RoutesUser from '../Components/routesUser'
import '../resources/css/travels.css'
import cancelBtn from '../resources/img/cancelIcon.svg'

const TravelsPage = () => {

    const [addRoute, setAddRoute] = useState(false)

    const addNewRoute = () => {
        setAddRoute(!addRoute)
    }

    const cancelAddRoute = () => {
        setAddRoute(false)
    }

    return (
        <div className='travelsPage'>
            <Header />
            {
                addRoute
                    ?
                    <div>
                        <button onClick={cancelAddRoute} id='cancelAddRoute'>
                            <img src={cancelBtn} alt="" />
                        </button>
                        <RoutesUser />
                    </div>
                    :
                    <div className='bodyTP'>
                        <div className='rigthTP'>
                            <div>
                                Historial
                            </div>
                        </div>

                        <div className='leftTP'>
                            <div className='myTravelTP'>
                                Viajes Creados
                            </div>

                            <div className='addTravelTP'>
                                <button onClick={addNewRoute} id='btnAddRouteSP' >Añadir Ruta</button>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default TravelsPage