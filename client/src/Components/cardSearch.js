import React from 'react'
import '../resources/css/cardSearch.css'
import applyIcon from '../resources/img/applyIcon.png'

const CardSearch = (props) => {

    return (
        <div className='cardSearch'>
            <div className='btnsCS'>
                <button id='btnApply'>
                    <img src={applyIcon} alt="" id='imgApply'/>
                </button>
            </div>
            
            <div className='bodyCS'>
                <div className='fieldCS'>
                    <p className='titleField'>Origen</p>
                    <p className='valueCS'>{props.source}</p>
                </div>

                <div className='fieldCS'>
                    <p className='titleField'>Destino</p>
                    <p className='valueCS'>{props.destiny}</p>
                </div>

                <div className='fieldCS'>
                    <p className='titleField'>Precio</p>
                    <p className='valueCS'>{props.price}</p>
                </div>

                <div className='fieldCS'>
                    <p className='titleField'>Cupos Libres</p>
                    <p className='valueCS'>{props.vehicle[0].seats}</p>
                </div>
                
                <div className='fieldCS'>
                    <p className='titleField'>Contacto</p>
                    <p className='valueCS'>{props.contact}</p>
                </div>

            </div>

            <div className='btnsCS'>
                <button id='btnViewMap'>Ver Mapa</button>
            </div>
        </div>
    )
}

export default CardSearch