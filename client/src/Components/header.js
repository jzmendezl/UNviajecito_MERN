import { useNavigate } from 'react-router-dom'
import '../resources/css/header.css'

import { useUsers } from '../context/userContext'
import iconoL from '../resources/img/iconoL.png'


export default function Header() {

  const { currentUser, logout } = useUsers()

  let navigate = useNavigate();

  const goAboutUs = () => {
    navigate('/aboutUs', {state:  currentUser })
  }
  // const goSearch = () => {
  //   navigate('/search')
  // }
  const goTravels = () => {
    navigate('/my_travels')
  }
  const goSearch2 = () => {
    navigate('/search')
  }
  const goAccount = () => {
    navigate('/my_account', {state:  currentUser })
  }
  const LogOut = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='navBar'>
      <div className="holi">
      <img src={iconoL} alt=""  className='sizeImage'   />   </div>
        <div className='optNavBar' onClick={goAccount}> <h3>Cuenta</h3></div>
        <div className='optNavBar' onClick={goTravels}><h3>Mis Viajes</h3></div>
        <div className='optNavBar' onClick={goSearch2}><h3>Buscar</h3></div>
        <div className='optNavBar' onClick={goAboutUs}><h3>Acerca de nosotros</h3></div>
        <div className='optNavBar' onClick={LogOut}><h3>Salir</h3></div>
      </div>
      <hr />
    </div>
  )
}
