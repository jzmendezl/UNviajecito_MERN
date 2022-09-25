import { useNavigate } from 'react-router-dom'
import '../resources/css/header.css'

import { useUsers } from '../context/userContext'


export default function Header() {

  const { currentUser, setCurrentUser } = useUsers()

  let navigate = useNavigate();

  const goHome = () => {
    navigate('/home', {state:  currentUser })
  }
  const goSearch = () => {
    navigate('/search')
  }
  const goAccount = () => {
    navigate('/account', {state:  currentUser })
  }
  const LogOut = () => {
    setCurrentUser(null)
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='navBar'>
        <div className='optNavBar' onClick={goHome}>Home</div>
        <div className='optNavBar' onClick={goSearch}>Buscar</div>
        <div className='optNavBar' onClick={goAccount}>Cuenta</div>
        <div className='optNavBar' onClick={LogOut}>LogOut</div>
      </div>
      <hr />
    </div>
  )
}
