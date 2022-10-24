import { useState } from 'react'
import '../resources/css/createdTravels.css'

const CreatedTravels = (props) => {
  const [viewMoreInfo, setViewMoreInfo] = useState(false)

  const moreInfo = () => {
    setViewMoreInfo(!viewMoreInfo)
  }

  const formatDate = (date) =>{
    return new Date(date).toLocaleString('es-CO')
  }


  return (
    <div className="objectCT" >
      {
        viewMoreInfo
          ?
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
          </div>
      }
    </div>
  )
}

export default CreatedTravels