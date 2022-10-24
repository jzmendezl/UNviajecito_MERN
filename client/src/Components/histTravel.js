import '../resources/css/histTravel.css'
import starIcon from '../resources/img/starIcon2.png'

import React, { useState } from 'react'

const HistTravel = () => {

    const [viewMoreInfo, setViewMoreInfo] = useState(false)
    const [isRating, setIsRating] = useState(false)
    const [rate, setRate] = useState(0)

    const moreInfo = () => {
        setViewMoreInfo(!viewMoreInfo)
    }

    const ratingTrtavel = (e) => {
        e.preventDefautl()

    }

    const formatDate = (date) => {
        return new Date(date).toLocaleString('es-CO')
    }

    console.log(rate);

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
                            <p>{ }</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Destino</p>
                            <p>{ }</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Fecha</p>
                            <p>{ }</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Precio</p>
                            <p>{ }</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Cupos</p>
                            <p>{ }</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Pasajeros</p>
                            <p>
                                {
                                    // props.passengers.map(passenger => (
                                    //     <li key={passenger.UID} id='listPassengers' >
                                    //         {passenger.namePassenger}
                                    //     </li>
                                    // ))
                                }
                            </p>
                        </div>
                        {
                            !isRating
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
                            <p>{ }</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Destino</p>
                            <p>{ }</p>
                        </div>
                        <div className="fieldHT">
                            <p className='titleFieldHT'>Fecha</p>
                            <p>{ }</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default HistTravel