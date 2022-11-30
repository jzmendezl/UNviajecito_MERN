import '../resources/css/histTravel.css'
import starIcon from '../resources/img/starIcon2.png'
import React, { useEffect, useState } from 'react'
import { useUsers } from '../context/userContext'
import{HiDotsHorizontal} from 'react-icons/hi'

const HistTravel = (props) => {

    const { updateTravel, updateUser, getCredentials, currentUser, setCurrentUser } = useUsers()
    const [viewMoreInfo, setViewMoreInfo] = useState(false)
    const [isRating, setIsRating] = useState(currentUser?.wheelHist?.isRate)
    const [rate, setRate] = useState(0)
    const [statusTravel, setStatusTravel] = useState(props.status)
    const [userCredentials, setUserCredentials] = useState('')
    const [grade, setGrade] = useState(false)

    useEffect(() => {
        setUserCredentials(getCredentials())
        const index = currentUser?.wheelHist?.findIndex(travel => travel.TID === props.tid)
        setIsRating(currentUser?.wheelHist[index].isRate)

        if (props.status === 'Finished') {
            setGrade(true)
        }

        const ratingTrtavel = async () => {
            const addRate = []
            props?.ratings?.forEach(rate => (addRate.push(rate)))
            // addRate.push(props.ratings)
            addRate.push(rate)
            setRate(0)
            const ratings = addRate
            await updateTravel(props.tid, { ratings: ratings })
            const index = currentUser?.wheelHist?.findIndex(travel => travel.TID === props.tid)
            let newHist = [...currentUser?.wheelHist]
            newHist[index] = { ...newHist[index], isRate: true }
            const wheelHist = newHist

            setCurrentUser({ ...currentUser, wheelHist: wheelHist })
            await updateUser(userCredentials.UID, { ...currentUser, wheelHist: wheelHist })
        }

        if (rate !== 0) {
            ratingTrtavel()
            setIsRating(true)
        }

    }, [currentUser, currentUser?.wheelHist, getCredentials, props?.ratings, props.status, props.tid, rate, setCurrentUser, updateTravel, updateUser, userCredentials.UID])


    const moreInfo = () => {
        setViewMoreInfo(!viewMoreInfo)
    }


    const formatDate = (date) => {
        return new Date(date).toLocaleString('es-CO')
    }

    return (
        <div className='objectHT'>
            {
                viewMoreInfo
                    ?
                    <div>
                        <div className='headCardHT'>
                            <button id='btnViewHT' onClick={moreInfo}>
                                <HiDotsHorizontal  size={30}/>
                            </button>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Origen</p>
                            <p>{props.source}</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Destino</p>
                            <p>{props.destiny}</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Fecha</p>
                            <p>{formatDate(props.dateTime)}</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Precio</p>
                            <p>{props.price}</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Conductor</p>
                            <p>{props.userName}</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Estado</p>
                            <p>
                                {
                                    props.status === 'Created'
                                        ? 'Creado'
                                        : props.status === 'Started'
                                            ? 'Iniciado'
                                            : 'Finalizado'
                                }
                            </p>
                        </div>
                        {
                            !isRating && grade
                                ?
                                <div>
                                    <p id='titleRateHT'>Calificar</p>
                                    <div className="fieldHT">
                                        <div id='rateTravelField'>
                                            <div className='starIcon'>
                                                <img src={starIcon} className='rateStar' alt="" onClick={e => setRate(1)} />
                                            </div>
                                            <div className='starIcon'>
                                                <img src={starIcon} className='rateStar' alt="" onClick={e => setRate(2)} />
                                            </div>
                                            <div className='starIcon'>
                                                <img src={starIcon} className='rateStar' alt="" onClick={e => setRate(3)} />
                                            </div>
                                            <div className='starIcon'>
                                                <img src={starIcon} className='rateStar' alt="" onClick={e => setRate(4)} />
                                            </div>
                                            <div className='starIcon'>
                                                <img src={starIcon} className='rateStar' alt="" onClick={e => setRate(5)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                ''
                        }

                    </div>

                    :
                    <div>
                        <div className='headCardHT'>
                            <button id='btnViewHT' onClick={moreInfo}>
                                <HiDotsHorizontal  size={30}/>
                            </button>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Origen</p>
                            <p>{props.source}</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Destino</p>
                            <p>{props.destiny}</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Fecha</p>
                            <p>{formatDate(props.dateTime)}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default HistTravel