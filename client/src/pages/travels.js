import { useEffect, useState } from 'react'
import CreatedTravels from '../Components/createdTravels'
import Header from '../Components/header'
import RoutesUser from '../Components/routesUser'
import { useUsers } from '../context/userContext'
import '../resources/css/travels.css'
import cancelBtn from '../resources/img/cancelIcon.svg'

const TravelsPage = () => {

    const { viewRender, setViewRender, currentUser, getTravel, } = useUsers()

    const [infoTravels, setInfoTravels] = useState([])

    useEffect(() => {

        const getInfoTravelsUser = async () => {
            const results = []

            currentUser?.userWheels.forEach(async travel => {
                const res = await getTravel(travel)
                results.push(res.data)
                setInfoTravels(results)
            })

        }

        getInfoTravelsUser()

    }, [currentUser?.userWheels, getTravel])


    const addNewRoute = () => {
        setViewRender(!viewRender)
    }

    const cancelAddRoute = () => {
        setViewRender(false)
    }

    console.log(currentUser?.userWheels);

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

                            </div>
                        </div>

                        <div className='leftTP'>
                            <div className='myTravelTP'>
                                <p>Viajes Creados</p>
                                {
                                    infoTravels.map(travel => (
                                        <CreatedTravels
                                            key={travel._id}
                                            source={travel.source}
                                            destiny={travel.destiny}
                                            dateTime={travel.dateTime}
                                            price={travel.price}
                                            vehicle={travel.vehicle}
                                            passengers={travel.passengers}
                                            remark={travel.remark}

                                        />
                                    ))
                                }
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