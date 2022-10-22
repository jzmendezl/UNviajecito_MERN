import Header from '../Components/header'
import RoutesUser from '../Components/routesUser'
import { useUsers } from '../context/userContext'
import '../resources/css/travels.css'
import cancelBtn from '../resources/img/cancelIcon.svg'

const TravelsPage = () => {

    // const [addRoute, setAddRoute] = useState(false)
    const {viewRender, setViewRender, currentUser} = useUsers()

    const addNewRoute = () => {
        setViewRender(!viewRender)
    }

    const cancelAddRoute = () => {
        setViewRender(false)
    }

    console.log(currentUser);

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
                                <p>Historial</p>
                                
                                {
                                    currentUser?.wheelHist.length > 0
                                    ?
                                        <p>{currentUser?.wheelHist?.forEach(element => {
                                          <p>{element}</p>
                                        })}</p>
                                    :
                                    <p>Por el Momento No Has Hecho Ningun Viaje</p>
                                }
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