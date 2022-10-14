import React from 'react'
import '../resources/css/cardSearch.css'

const CardSearch = () => {
    return (
        <div className='cardSearch'>
            <div className='btnsCS'>
                <button id='btnApply'>
                    <img src="" alt="" />
                </button>
            </div>
            
            <div className='bodyCS'>
                <div className='fieldCS'>
                    <p className='titleField'>Origen</p>
                    <p className='valueCS'>value</p>
                </div>

                <div className='fieldCS'>
                    <p className='titleField'>Destino</p>
                    <p className='valueCS'>value</p>
                </div>

                <div className='fieldCS'>
                    <p className='titleField'>Precio</p>
                    <p className='valueCS'>value</p>
                </div>

                <div className='fieldCS'>
                    <p className='titleField'>Cupos Libres</p>
                    <p className='valueCS'>value</p>
                </div>
                
                <div className='fieldCS'>
                    <p className='titleField'>Contacto</p>
                    <p className='valueCS'>value</p>
                </div>

            </div>

            <div className='btnsCS'>
                <button id='btnViewMap'>Ver Mapa</button>
            </div>
        </div>
    )
}

export default CardSearch