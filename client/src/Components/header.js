import { useNavigate } from 'react-router-dom'
import '../resources/css/header.css'

import { useUsers } from '../context/userContext'


export default function Header() {

  const { currentUser, logout } = useUsers()

  let navigate = useNavigate();

  const goAboutUs = () => {
    navigate('/aboutUs', {state:  currentUser })
  }
  const goSearch = () => {
    navigate('/search')
  }
  const goSearch2 = () => {
    navigate('/search2')
  }
  const goAccount = () => {
    navigate('/account', {state:  currentUser })
  }
  const LogOut = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='navBar'>
        <div className='optNavBar' onClick={goAccount}>Cuenta</div>
        <div className='optNavBar' onClick={goSearch}>Buscar</div>
        <div className='optNavBar' onClick={goSearch2}>Buscar 2</div>
        <div className='optNavBar' onClick={goAboutUs}>About Us</div>
        <div className='optNavBar' onClick={LogOut}>LogOut</div>
      </div>
      <hr />
    </div>
  )
}
