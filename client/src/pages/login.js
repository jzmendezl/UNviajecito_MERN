import '../resources/css/login.css'
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/userContext';


export default function LoginPage() {


  const { loginUser, getUser } = useUsers()
  let navigate = useNavigate();

  const handleLoginEmail = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;

    const authUser = {
      email,
      password
    }

    const user = await loginUser(authUser)
    await getUser(user.id)
    navigate('/home')
  }

  const handleSignin = () => {
    navigate('/register')
  }


  return (
    <div id='pageLogin'>
      <div id='contentLogin'>
        <form id='formLogin' onSubmit={handleLoginEmail}>
          <label htmlFor="email" className='lbl-email'>
            <span className='txt-email'>Email</span>
            <input type="email" name="email" id="email" placeholder='example@example.com' />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" name="password" id="password" />
          </label>
          <button type="submit" className='sendLogin'>Login</button>
        </form>
        <div className='option'>
          <button className='sendSignin' onClick={handleSignin}>Signin</button>
        </div>
      </div>
    </div>
  )
}
