import { useNavigate } from 'react-router-dom'
import Header from '../Components/header'
import { useUsers } from '../context/userContext'
import '../resources/css/home.css'

export default function HomePage() {
  
  let navigate = useNavigate()
  
  const { isLogged } = useUsers()

  if (!isLogged()) {
    navigate('/root')
  }

  return (
    <div className='pageHome'>
      <Header />
    </div>
  )
}
