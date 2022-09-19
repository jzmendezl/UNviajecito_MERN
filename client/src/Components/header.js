import { useNavigate } from 'react-router-dom'
import '../resources/css/header.css'


export default function Header() {

  let navigate = useNavigate();

  const goHome = () => {
    navigate('/home')
  }
  const goSearch = () => {
    navigate('/search')
  }
  const goAccount = () => {
    navigate('/account')
  }
  const LogOut = () => {
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
