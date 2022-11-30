import { useEffect, useState } from 'react'
import CreatedTravels from '../Components/createdTravels'
import Header from '../Components/header'
import HistTravel from '../Components/histTravel'
import RoutesUser from '../Components/routesUser'
import { useUsers } from '../context/userContext'
import '../resources/css/travels.css'
import {MdCancel} from 'react-icons/md'

const TravelsPage = () => {

    const { currentUser, getTravel, } = useUsers()
    const [histUser, setHistUser] = useState([])
    const [infoTravels, setInfoTravels] = useState([])
    const [renderNewTravel, setRenderNewTravel] = useState(false)


    useEffect(() => {
        const results = []
        const histResults = []

        const getInfoTravelsUser = async () => {
            currentUser?.userWheels?.forEach(async travel => {
                const { data } = await getTravel(travel)
                results.push(data)
                // console.log(data);
                setInfoTravels([...results])
            })
        }

        const getHistUser = async () => {

            currentUser?.wheelHist?.forEach(async travel => {
                const { data } = await getTravel(travel.TID)
                histResults.push(data)
                setHistUser([...histResults])
            })
        }

        getInfoTravelsUser()
        getHistUser()

    }, [currentUser?.userWheels, currentUser?.wheelHist, getTravel])

    // console.log(histUser);
    return (
        <div className='travelsPage'>
            <Header />
            {
                renderNewTravel
                    ?
                    <div>
                        <button onClick={() => setRenderNewTravel(!renderNewTravel)} id='cancelAddRoute'>
                            <MdCancel size={30}  />
                        </button>
                        <RoutesUser />
                    </div>
                    :
                    <div className='bodyTP'>
                        <div className='addTravelTP'>
                            <button onClick={() => setRenderNewTravel(!renderNewTravel)} id='btnAddRouteTP' >Añadir Ruta</button>
                        </div>

                        <div className='downTP'>
                            <div className='rigthTP'>

                                <p>Historial</p>
                                <div>
                                    {
                                        histUser.length !== 0
                                            ?
                                            histUser.map(travel => (
                                                <HistTravel
                                                    key={travel._id}
                                                    tid={travel._id}
                                                    contact={travel.contact}
                                                    userName={travel.userName}
                                                    source={travel.source}
                                                    destiny={travel.destiny}
                                                    dateTime={travel.dateTime}
                                                    price={travel.price}
                                                    vehicle={travel.vehicle}
                                                    passengers={travel.passengers}
                                                    remark={travel.remark}
                                                    status={travel.status}
                                                    ratings={travel.ratings}
                                                />
                                            ))
                                            :
                                            <p id='txtNoHist'>No Has Participado En Ningun Viaje Aun</p>
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