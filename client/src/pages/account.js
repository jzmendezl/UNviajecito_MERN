import '../resources/css/account.css'
import Header from '../Components/header'
import Photo from '../resources/img/photo_user.svg'
import { useUsers } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function AccountPage() {

  const { currentUser, isLogged, addVehicle, getVehicle } = useUsers()
  // console.log('ACT', currentUser);

  const [kind, setKind] = useState(0)
  const [plate, setPlate] = useState('')
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [seats, setSeats] = useState(0)
  const [vehicle, setVehicle] = useState(null)


  let navigate = useNavigate()

  useEffect(() => {
    if (!isLogged()) {
      navigate('/')
    }

  }, [isLogged, navigate])

  const linkVehicle = async (e) => {
    e.preventDefault();
    setVehicle({
      kind: e.target[0].value || e.target[1].value,
      plate: e.target[2].value,
      model: e.target[3].value,
      color: e.target[4].value,
      seats: e.target[5].value
    })
    const vu = await addVehicle(vehicle)
    console.log(vu);
    setPlate('')
    setModel('')
    setColor('')
    setSeats('0')
    e.target.reset()
    // setVehicle('')
  }

  console.log(vehicle);

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
            <p className='titleLinkUser'>Vehiculos vinculados a tu cuenta</p>
            {
              vehicle
                ?
                <ul>
                  <p>Vehiculo</p>
                  <li>Tipo {vehicle.type}</li>
                  <li>Placa {vehicle.plate}</li>
                  <li>Modelo {vehicle.model}</li>
                  <li>Color {vehicle.color}</li>
                  <li>Puestos {vehicle.seats}</li>
                </ul>
                :
                <p>No tienes vehiculos asociados a tu cuenta</p>
            }
          </div>

          <div className='newLink'>
            <form onSubmit={linkVehicle}>
              <p className='titleLinkUser'>Vincular Vehiculo a la cuenta</p>
              <label htmlFor="type" className='lblLinkUser'>
                <p className='titleFormLink'>Carro</p>
                <input type='radio' id='type' name='type' value={'Carro'} onChange={(e) => setKind(e.target.value)} />
                <p className='titleFormLink'>Moto</p>
                <input type='radio' id='type' name='type' value={'Moto'} onChange={(e) => setKind(e.target.value)} />
              </label>
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
