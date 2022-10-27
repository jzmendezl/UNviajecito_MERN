import { useEffect, useState } from 'react'
import { useUsers } from '../context/userContext'
import '../resources/css/createdTravels.css'

const CreatedTravels = (props) => {

  const { updateTravel } = useUsers()
  const [viewMoreInfo, setViewMoreInfo] = useState(false)
  const [statusTravel, setStatusTravel] = useState('')

  const moreInfo = () => {
    setViewMoreInfo(!viewMoreInfo)
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleString('es-CO')
  }

  // useEffect(() => {
  //   setStatusTravel(props.status)
  // }, [props.status])

  const startTravel = async () => {
    const res = await updateTravel(props.tid, { status: 'Started' })
    console.log('startTravel', res);

  }

  const finishTravel = async () => {
    const res = await updateTravel(props.tid, { status: 'Finished' })
    console.log('finishTravel', res);

  }

  return (
    <div className="objectCT" >
      {
        viewMoreInfo
          ?
          <div>
            <button id='btnViewCT' onClick={moreInfo}>

            </button>
            {
              props.status === 'Created'
                ?
                <button id='btnStartCT' onClick={startTravel}>

                </button>
                : props.status === 'Started'
                  ? <button id='btnFinishCT' onClick={finishTravel}>
                    <p>Fin</p>
                  </button>
                  : ''

            }
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
                  props.status === 'Created'
                    ? 'Creado'
                    : props.status === 'Started'
                      ? 'Iniciado'
                      : 'Finalizado'
                }
              </p>
            </div>
          </div>

          :
          <div>
            <button id='btnViewCT' onClick={moreInfo}>

            </button>
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
                  props.status === 'Created'
                    ? 'Creado'
                    : props.status === 'Started'
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