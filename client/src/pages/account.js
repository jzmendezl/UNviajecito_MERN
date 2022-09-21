import '../resources/css/account.css'
import Header from '../Components/header'
import Photo from '../resources/img/photo_user.svg'
import { useUsers } from '../context/userContext'

export default function AccountPage() {

  const { currentUser } = useUsers()
  // console.log('ACT', currentUser);

  const linkVehicle = () => {

  }

  return (
    <div className='accountPage'>
      <Header />

      <div className='bodyAccount'>
        <div className='dataUser'>
          <div id='photoUser'>
            <img src={currentUser ? currentUser.data.photoUser.url : Photo} alt="Foto Usuario" id='photoUser' />
          </div>
          <div className='infoUser'>
            <p className='titleInfoUser'>{currentUser ? currentUser.data.userName : 'Cargando'}</p>
            <p className='titleInfoUser'>{currentUser ? currentUser.data.email : 'Cargando'}</p>
            <p className='titleInfoUser'>{currentUser ? currentUser.data.celPhone : 'Cargando'}</p>
          </div>
        </div>

        <div className='linkToUser'>
          <div>
            <p className='titleLinkUser'>Vehiculos vinculados a tu cuenta</p>
            <textarea name="listLink" id="listLink" cols="50" rows="10"></textarea>
          </div>

          <div className='newLink'>
            <form onSubmit={linkVehicle}>
              <p className='titleLinkUser'>Vincular Vehiculo a la cuenta</p>
              <label htmlFor="plate" className='lblLinkUser'>
                <p className='titleFormLink'>Placa</p>
                <input type="text" id='plate' />
              </label>
              <label htmlFor="model" className='lblLinkUser'>
                <p className='titleFormLink'>Modelo</p>
                <input type="text" id='model' />
              </label>
              <label htmlFor="color" className='lblLinkUser'>
                <p className='titleFormLink'>Color</p>
                <input type="text" id='color' />
              </label>
              <label htmlFor="seats" className='lblLinkUser'>
                <p className='titleFormLink'>Puestos</p>
                <input type="number" id='seats' min={1} max={5} />
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
