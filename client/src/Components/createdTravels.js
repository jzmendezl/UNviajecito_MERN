import { useState } from 'react'
import { useUsers } from '../context/userContext'
import '../resources/css/createdTravels.css'
import{HiDotsHorizontal} from 'react-icons/hi'
import{HiDotsVertical} from 'react-icons/hi'
import {FaLocationArrow} from 'react-icons/fa'

import{BiCurrentLocation} from 'react-icons/bi'


const CreatedTravels = (props) => {

  const { updateTravel } = useUsers()
  const [viewMoreInfo, setViewMoreInfo] = useState(false)
  const [statusTravel, setStatusTravel] = useState(props.status)

  const moreInfo = () => {
    setViewMoreInfo(!viewMoreInfo)
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleString('es-CO')
  }


  const startTravel = async () => {
    setStatusTravel('Started')
    const res = await updateTravel(props.tid, { status: 'Started' })
    setViewMoreInfo(!viewMoreInfo)
    console.log('startTravel', res);

  }

  const finishTravel = async () => {
    setStatusTravel('Finished')
    const res = await updateTravel(props.tid, { status: 'Finished' })
    setViewMoreInfo(!viewMoreInfo)
    console.log('finishTravel', res);

  }

  return (
    <div className="objectCT" >
      {
        viewMoreInfo
          ?
          <div>
            <div className='headCard'>
              <button id='btnViewCT' onClick={moreInfo} >
                <HiDotsVertical size={25}  />
              </button>
              {
               statusTravel === 'Created'
                  ?
                  <div className='headCard'>
                    <button id='btnStartCT' onClick={startTravel}>
                      <FaLocationArrow size={20}   />
                    </button>
                    <p>Iniciar viaje</p>
                  </div>
                  : statusTravel === 'Started'
                    ?
                    <div className='headCard'>
                      <button id='btnFinishCT' onClick={finishTravel}>
                        <BiCurrentLocation size={20} />
                      </button>
                      <p>Finalizar Viaje</p>
                    </div>
                    : ''

              }
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Origen</p>
              <p>{props.source}</p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Destino</p>
              <p>{props.destiny}</p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Fecha</p>
              <p>{formatDate(props.dateTime)}</p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Precio</p>
              <p>{props.price}</p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Cupos</p>
              <p>{props.vehicle?.seats}</p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Pasajeros</p>
              <p>
                {
                  props.passengers.map(passenger => (
                    <li key={passenger.UID} id='listPassengers' >
                      {passenger.namePassenger}
                    </li>
                  ))
                }
              </p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Estado</p>
              <p>
              {
                  statusTravel === 'Created'
                    ? 'Creado'
                    : statusTravel === 'Started'
                      ? 'Iniciado'
                      : 'Finalizado'
                }
              </p>
            </div>
          </div>

          :
          <div>
            <div className='headCard'>
              <button id='btnViewCT' onClick={moreInfo}>
              <HiDotsHorizontal size={25}  />
              </button>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Origen</p>
              <p>{props.source}</p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Destino</p>
              <p>{props.destiny}</p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Fecha</p>
              <p>{formatDate(props.dateTime)}</p>
            </div>
            <div className="fieldCT">
              <p className='titleFieldCT'>Estado</p>
              <p>
                {
                  statusTravel === 'Created'
                    ? 'Creado'
                    : statusTravel === 'Started'
                      ? 'Iniciado'
                      : 'Finalizado'
                }
              </p>
            </div>
          </div>
      }
    </div>
  )
}

export default CreatedTravels