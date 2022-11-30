import '../resources/css/account.css'
import Header from '../Components/header'

import { useUsers } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Vehicle from '../Components/vehicle'
import ModalVehicle from '../Components/ModalVehicle'
import { IoMdAdd } from "react-icons/io";
import CardInfoUser from '../Components/CardInfoUser'


export default function AccountPage() {

  const { currentUser, isLogged, getCredentials, getAllTravels, setCurrentUser } = useUsers()
  const [isOpen, setIsOpen] = useState(false)
  


  const [vehicleUser, setVehicleUser] = useState([])
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 250000;

  let navigate = useNavigate()
  
  useEffect(() => {
    if (!isLogged()) {
      navigate('/')
    }

    setVehicleUser(currentUser?.vehicle)
    
    

  }, [currentUser?.email, currentUser?.vehicle, getAllTravels, isLogged, navigate])


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === vehicleUser.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);


  return (
    <div className='accountPage'>
      <Header />

      <div className='bodyAccount'>
        <CardInfoUser />

        <div className='linkToUser'>

          <ModalVehicle open={isOpen} close={() => setIsOpen(false)} />
          <div id='btnAddVehicle'>
            <button onClick={() => setIsOpen(true)} id='btnAddVehicle'>
              <div id='lblAddVehicle'>
               
                <IoMdAdd size={20}  />
                <p>Añadir Vehiculo</p>
              </div>
            </button>
          </div>

          {
            vehicleUser[0] === ''
              ?
              <p>No tienes Vehiculos Asociados A Tu Cuenta</p>
              :
              <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                  {
                    vehicleUser.map((v, i) => (
                      <div className="slide">
                        <Vehicle
                          key={i}
                          plate={v.plate}
                          color={v.color}
                          model={v.model}
                          seats={v.seats}
                          kind={v.kind}
                        />
                      </div>
                    ))
                  }
                </div>

                <div className="slideshowDots">
                  {vehicleUser.map((_, idx) => (
                    <div
                      key={idx}
                      className={`slideshowDot${index === idx ? " active" : ""}`}
                      onClick={() => {
                        setIndex(idx);
                      }}
                    ></div>
                  ))}
                </div>

              </div>
          }

        </div>

      </div>
    </div >
  )
}
