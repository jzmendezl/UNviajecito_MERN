import { useState } from 'react'
import { useUsers } from '../context/userContext'
import '../resources/css/createdTravels.css'
import viewMoreIcon from '../resources/img/viewMore.png'
import startTravelIcon from '../resources/img/startTravel.png'
import finishTravelIcon from '../resources/img/finishTravel.png'


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
              <button id='btnViewCT' onClick={moreInfo}>
                <img src={viewMoreIcon} alt="" />
              </button>
              {
               statusTravel === 'Created'
                  ?
                  <div className='headCard'>
                    <button id='btnStartCT' onClick={startTravel}>
                      <img src={startTravelIcon} alt="" />
                    </button>
                    <p>Iniciar viaje</p>
                  </div>
                  : statusTravel === 'Started'
                    ?
                    <div className='headCard'>
                      <button id='btnFinishCT' onClick={finishTravel}>
                        <img src={finishTravelIcon} alt="" />
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
                <img src={viewMoreIcon} alt="" className='ViewMoreIcon' />
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