import { useNavigate } from 'react-router-dom'
import '../resources/css/header.css'

import { useUsers } from '../context/userContext'


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
        <div className='optNavBar' onClick={goAccount}>Cuenta</div>
        {/* <div className='optNavBar' onClick={goSearch}>Buscar</div> */}
        <div className='optNavBar' onClick={goTravels}>Mis Viajes</div>
        <div className='optNavBar' onClick={goSearch2}>Buscar</div>
        <div className='optNavBar' onClick={goAboutUs}>Acerca de nosotros</div>
        <div className='optNavBar' onClick={LogOut}>Salir</div>
      </div>
      <hr />
    </div>
  )
}
