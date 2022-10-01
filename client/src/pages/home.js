
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/header'
import { useUsers } from '../context/userContext'
import '../resources/css/home.css'

export default function HomePage() {

  let navigate = useNavigate()
  const { isLogged } = useUsers()

  useEffect(() => {
    if (!isLogged()) {
      navigate('/')
    }
  }, [isLogged, navigate])


  return (
    <div className='pageHome'>
      <Header />
    </div>
  )
}
