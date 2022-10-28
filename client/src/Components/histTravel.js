import '../resources/css/histTravel.css'
import starIcon from '../resources/img/starIcon2.png'

import React, { useEffect, useState } from 'react'
import { useUsers } from '../context/userContext'

const HistTravel = (props) => {

    const { updateTravel, updateUser, getCredentials, currentUser , setCurrentUser} = useUsers()
    const [viewMoreInfo, setViewMoreInfo] = useState(false)
    const [isRating, setIsRating] = useState(currentUser?.wheelHist?.isRate)
    const [rate, setRate] = useState(0)
    const [statusTravel, setStatusTravel] = useState(props.status)
    const [userCredentials, setUserCredentials] = useState('')

    useEffect(() => {
        setUserCredentials(getCredentials())

        if (props.status === 'Finished') {
            setStatusTravel(true)
        }



        const ratingTrtavel = async () => {
            const addRate = []
            props?.ratings?.forEach(rate => (addRate.push(rate)))
            // addRate.push(props.ratings)
            addRate.push(rate)
            const ratings = addRate
            await updateTravel(props.tid, { ratings: ratings })
            const index = currentUser?.wheelHist?.findIndex(travel =>  travel.TID === props.tid)
            console.log('Este',{ ...currentUser?.wheelHist[index], isRate: true });
            const wheelHistUpdate = { ...currentUser?.wheelHist[index], isRate: true }
            const wheelHist = currentUser?.wheelHist.splice(index, 1, wheelHistUpdate)
            console.log(wheelHist);
            await setCurrentUser({ ...currentUser?.wheelHist[index], isRate: true })
            await updateUser(userCredentials.UID, { ...currentUser?.wheelHist[0], isRate: true })
        }

        if (rate !== 0) {
            ratingTrtavel()
            setIsRating(true)
        }

    }, [rate])
    console.log(currentUser);

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
                        <button id='btnViewHT' onClick={moreInfo}>
                        </button>
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
                            <p className='titleFieldHT'>Cupos</p>
                            <p>{props.seats}</p>
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
                            !isRating && statusTravel
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
                        <button id='btnViewHT' onClick={moreInfo}>

                        </button>
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