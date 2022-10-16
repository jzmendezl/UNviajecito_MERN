import Header from '../Components/header'
import RoutesUser from '../Components/routesUser'
import { useUsers } from '../context/userContext'
import '../resources/css/travels.css'
import cancelBtn from '../resources/img/cancelIcon.svg'

const TravelsPage = () => {

    // const [addRoute, setAddRoute] = useState(false)
    const {viewRender, setViewRender} = useUsers()

    const addNewRoute = () => {
        setViewRender(!viewRender)
    }

    const cancelAddRoute = () => {
        setViewRender(false)
    }

    return (
        <div className='travelsPage'>
            <Header />
            {
                viewRender
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