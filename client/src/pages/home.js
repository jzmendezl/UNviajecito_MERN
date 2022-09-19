import Header from '../Components/header'
import '../resources/css/home.css'
import { useUsers } from '../context/userContext'

export default function HomePage() {

  const { users } = useUsers()

  

  return (
    <div className='pageHome'>
      <Header />
    </div>
  )
}
