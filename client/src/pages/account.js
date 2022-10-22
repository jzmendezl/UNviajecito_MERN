import '../resources/css/account.css'
import Header from '../Components/header'
import Photo from '../resources/img/photo_user.svg'
import { useUsers } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function AccountPage() {

  const { currentUser, isLogged, setCurrentUser, updateUser, getCredentials } = useUsers()
  const [userCredentials, setUserCredentials] = useState('')

  const [kind, setKind] = useState(0)
  const [plate, setPlate] = useState('')
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [seats, setSeats] = useState(0)
  const [vehicleUser, setVehicleUser] = useState([])
  const [updateInfo, setUpdateInfo] = useState(false)
  // const vehicle = []



  let navigate = useNavigate()

  useEffect(() => {
    if (!isLogged()) {
      navigate('/')
    } else {
      setUserCredentials(getCredentials())
    }
    
    setVehicleUser(currentUser?.vehicle)

    const updateData = async (id, filter) => {
      try {
        const res = await updateUser(id, filter)
        setUpdateInfo(false)
        console.log(res);
        return res

      } catch (error) {
        console.error({ message: error });
      }
    }

    if (updateInfo) {
      const user = updateData(userCredentials.UID, { vehicleUser })
      setCurrentUser(user)
    }


  }, [currentUser?.vehicle, getCredentials, isLogged, navigate, setCurrentUser, updateInfo, updateUser, userCredentials.UID, vehicleUser])

  // const getCredentials = () => {
  //   const user = JSON.parse(window.localStorage.getItem('User'))
  //   const token = user.token
  //   const UID = user.UID
  //   return { token, UID }
  // }

  const linkVehicle = async (e) => {
    e.preventDefault();
    const newVehicle = {
      kind,
      plate,
      model,
      color,
      seats
    }
    vehicleUser.push(newVehicle)
    await setCurrentUser({ ...currentUser, vehicle: vehicleUser })
    setUpdateInfo(true)
    e.target.reset()
  }

  return (
    <div className='accountPage'>
      <Header />

      <div className='bodyAccount'>
        <div className='dataUser'>
          <div id='photoUser'>
            <img src={currentUser ? currentUser?.photoUser?.url : Photo} alt="Foto Usuario" id='photoUser' />
          </div>
          <div className='infoUser'>
            <p className='titleInfoUser'>{currentUser ? currentUser?.userName : 'Cargando'}</p>
            <p className='titleInfoUser'>{currentUser ? currentUser?.email : 'Cargando'}</p>
            <p className='titleInfoUser'>{currentUser ? currentUser?.celPhone : 'Cargando'}</p>
          </div>
        </div>

        <div className='linkToUser'>
          <div className='yourVehicles'>
            <p className='titleLinkUserView'>Vehiculos vinculados a tu cuenta</p>
            {
              currentUser?.vehicle.length > 0
                ?
                <ul>
                  <p>Vehiculo</p>
                  <li className='viewVehicle'>

                    <p className='titleViewForm'>Tipo</p>
                    <p className='valueViewForm'>{currentUser ? currentUser?.vehicle[0]?.kind : 'Cargando'}</p>

                  </li>
                  <li className='viewVehicle'>

                    <p className='titleViewForm'>Placa</p>
                    <p className='valueViewForm'>{currentUser ? currentUser?.vehicle[0]?.plate : 'Cargando'}</p>

                  </li>
                  <li className='viewVehicle'>

                    <p className='titleViewForm'>Modelo</p>
                    <p className='valueViewForm'>{currentUser ? currentUser?.vehicle[0]?.model : 'Cargando'}</p>

                  </li>
                  <li className='viewVehicle'>

                    <p className='titleViewForm'>Color</p>
                    <p className='valueViewForm'>{currentUser ? currentUser?.vehicle[0]?.color : 'Cargando'}</p>

                  </li>
                  <li className='viewVehicle'>

                    <p className='titleViewForm'>Puestos</p>
                    <p className='valueViewForm'>{currentUser ? currentUser?.vehicle[0]?.seats : 'Cargando'}</p>

                  </li>
                </ul>
                :
                <p>No tienes vehiculos asociados a tu cuenta</p>
            }
          </div>

          <div className='newLink'>
            <form onSubmit={linkVehicle}>
              <p className='titleLinkUser'>Vincular Vehiculo a la cuenta</p>
              <div id='kind'>
                <label htmlFor="kindCar" className='lblLinkUser'>
                  <p className='titleFormLink'>Carro</p>
                  <input type='radio' id='kindCar' name='kind' value={'Carro'} onChange={(e) => setKind(e.target.value)} />
                  {/* <p className='titleFormLink'>Moto</p>
                <input type='radio' id='kind' name='kind' value={'Moto'} onChange={(e) => setKind(e.target.value)} /> */}
                </label>
                <label htmlFor="kindBike" className='lblLinkUser'>
                  <p className='titleFormLink'>Moto</p>
                  <input type='radio' id='kindBike' name='kind' value={'Moto'} onChange={(e) => setKind(e.target.value)} />
                </label>
              </div>
              <label htmlFor="plate" className='lblLinkUser'>
                <p className='titleFormLink'>Placa</p>
                <input type="text" id='plate' onChange={(e) => setPlate(e.target.value)} />
              </label>
              <label htmlFor="model" className='lblLinkUser'>
                <p className='titleFormLink'>Modelo</p>
                <input type="text" id='model' onChange={(e) => setModel(e.target.value)} />
              </label>
              <label htmlFor="color" className='lblLinkUser'>
                <p className='titleFormLink'>Color</p>
                <input type="text" id='color' onChange={(e) => setColor(e.target.value)} />
              </label>
              <label htmlFor="seats" className='lblLinkUser'>
                <p className='titleFormLink'>Puestos</p>
                <input type="number" id='seats' min={1} max={5} onChange={(e) => setSeats(e.target.value)} />
              </label>
              <div id='btnFormLink'>
                <button type="submit" id='btnAdd'>Agregar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
