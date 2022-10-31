import React, { useEffect, useState } from 'react'
import { useUsers } from '../context/userContext'
import '../resources/css/cardSearch.css'
import applyIcon from '../resources/img/applyIcon.png'

const CardSearch = (props) => {

    const { updateTravel, getCredentials, currentUser, setCurrentUser, updateUser, getTravel } = useUsers()
    const [credentials, setCredentials] = useState(null)
    const [onTravel, setOnTravel] = useState(false)
    // const [acceptTravel, setAcceptTravel] = useState(false)

    useEffect(() => {
        setCredentials(getCredentials())

    }, [getCredentials])

    const verifyPassenger = async () => {
        const { data } = await getTravel(props.TID)
        if (!data.passengers.includes(credentials?.UID)) {
            return true
        } else {
            return false
        }
    }

    const applyTravel = async () => {
        if (parseInt(props.vehicle.seats) > 0) {
            if (!props.passengers.includes(credentials.UID)) {
                try {
                    const passenger = {
                        UID: credentials.UID,
                        namePassenger: currentUser.userName
                    }

                    const wheelHistNew = {
                        TID: props.TID,
                        isRate: false
                    }

                    if (verifyPassenger()) {
                        // props.passengers.push(passenger)
                        let passNew = []
                        let histUpdate = currentUser?.wheelHist
                        passNew.push(passenger)
                        histUpdate.push(wheelHistNew)
                        const wheelHist = histUpdate
                        console.log('updHist', wheelHist);
                        // const passengers = props.passengers
                        const passengers = passNew
                        await updateTravel(props.TID, { passengers })
                        passNew = []
                        setCurrentUser({ ...currentUser, wheelHist: { wheelHist } })
                        await updateUser(credentials.UID, { ...currentUser, wheelHist: wheelHist })
                    } else {
                        alert('Lo sentimos no puedes volver a aplicar al mismo viaje')
                    }

                } catch (error) {
                    console.error({ message: error.message });
                }
            } else {
                alert('Lo sentimos no puedes volver a aplicar al mismo viaje')
            }
        } else {
            alert('Lo sentimos este viaje ya no tiene cupos')
        }

    }
    // console.log(currentUser);
    
    return (
        <div className='cardSearch'>
            <div className='btnsCS'>
                <button id='btnApply' onClick={applyTravel}>
                    <img src={applyIcon} alt="" id='imgApply' />
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
                    <p className='valueCS'>{props.vehicle.seats}</p>
                </div>

                <div className='fieldCS'>
                    <p className='titleField'>Contacto</p>
                    <p className='valueCS'>{props.contact}</p>
                </div>

            </div>

            <div className='btnsCS'>
                {/* <button id='btnViewMap'>Ver Mapa</button> */}
            </div>
        </div>
    )
}

export default CardSearch