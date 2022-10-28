import { useEffect, useState } from 'react'
import CreatedTravels from '../Components/createdTravels'
import Header from '../Components/header'
import HistTravel from '../Components/histTravel'
import RoutesUser from '../Components/routesUser'
import { useUsers } from '../context/userContext'
import '../resources/css/travels.css'
import cancelBtn from '../resources/img/cancelIcon.svg'

const TravelsPage = () => {

    const { viewRender, setViewRender, currentUser, getTravel, } = useUsers()
    const [histUser, setHistUser] = useState([])
    const [infoTravels, setInfoTravels] = useState([])


    useEffect(() => {
        const results = []
        const histResults = []

        const getInfoTravelsUser = async () => {
            currentUser?.userWheels?.forEach(async travel => {
                const { data } = await getTravel(travel)
                results.push(data)
                setInfoTravels([...results])
            })
        }

        
        
        const getHistUser = async () => {

            currentUser?.wheelHist.forEach(async travel => {
                const { data } = await getTravel(travel)
                histResults.push(data)
            })
            setHistUser(histResults)
        }

        getInfoTravelsUser()
        getHistUser()

    }, [currentUser?.userWheels, currentUser?.wheelHist, getTravel])


    const addNewRoute = () => {
        setViewRender(!viewRender)
    }

    const cancelAddRoute = () => {
        setViewRender(false)
    }
    

    // console.log('infoT', infoTravels);
    // console.log('Hist', histUser);
    // // console.log(currentUser);
    

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
                        <div className='addTravelTP'>
                            <button onClick={addNewRoute} id='btnAddRouteTP' >Añadir Ruta</button>
                        </div>

                        <div className='downTP'>
                            <div className='rigthTP'>

                                <p>Historial</p>
                                <div>
                                    {
                                        histUser
                                            ?
                                            histUser.map(travel => (
                                                <HistTravel
                                                    key={travel._id}
                                                    tid={travel._id}
                                                    source={travel.source}
                                                    destiny={travel.destiny}
                                                    dateTime={travel.dateTime}
                                                    price={travel.price}
                                                    vehicle={travel.vehicle}
                                                    passengers={travel.passengers}
                                                    remark={travel.remark}
                                                    status={travel.status}
                                                />
                                            ))
                                            :
                                            'No Has Participado En Ningun Viaje Aun'
                                    }
                                </div>
                            </div>

                            <div className='leftTP'>
                                <div className='myTravelTP'>
                                    <p>Viajes Creados</p>
                                    {
                                        infoTravels.map(travel => (
                                            <CreatedTravels
                                                key={travel._id}
                                                tid={travel._id}
                                                source={travel.source}
                                                destiny={travel.destiny}
                                                dateTime={travel.dateTime}
                                                price={travel.price}
                                                vehicle={travel.vehicle}
                                                passengers={travel.passengers}
                                                remark={travel.remark}
                                                status={travel.status}
                                            />
                                        ))

                                    }
                                </div>


                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default TravelsPage