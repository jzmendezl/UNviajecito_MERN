import '../resources/css/histTravel.css'
import starIcon from '../resources/img/starIcon2.png'

import React, { useState } from 'react'

const HistTravel = (props) => {

    const [viewMoreInfo, setViewMoreInfo] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [isRating, setIsRating] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [rate, setRate] = useState(0)
    const [statusTravel, setStatusTravel] = useState(false)

    const moreInfo = () => {
        setViewMoreInfo(!viewMoreInfo)
    }
    // eslint-disable-next-line no-unused-vars
    const ratingTrtavel = (e) => {
        e.preventDefautl()

    }

    const formatDate = (date) => {
        return new Date(date).toLocaleString('es-CO')
    }
    if (props.status === 'Finished') {
        setStatusTravel(true)
    }

    // console.log(rate);

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