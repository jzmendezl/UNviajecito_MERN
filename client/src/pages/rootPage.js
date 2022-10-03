import '../resources/css/rootpage.css'
import { useNavigate } from 'react-router-dom'
import { useUsers } from '../context/userContext'
import { useEffect } from 'react'


export default function RootPage() {
  let navigate = useNavigate()
  const { isLogged } = useUsers()


  useEffect(() => {
    if (isLogged()) {
      navigate('/account')
    }  
  }, [isLogged, navigate])

  const goLogin = () => {
    navigate('login')
  }

  const goRegister = () => {
    navigate('register')
  }

  return (
    <div className='pageRoot'>
      <div className='txtRoot'>
        <h1>Bienvenidos a su plataforma de UNviajecito</h1>
      </div>
      <div className='btns'>
        <button id='btnLoginRoot' onClick={goLogin}>Login</button>
        <button id='btnSgnRoot' onClick={goRegister}>Singnin</button>
      </div>
    </div>
  )
}
