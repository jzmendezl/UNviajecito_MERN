import '../resources/css/login.css'
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/userContext';
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react';


export default function LoginPage() {

  let navigate = useNavigate();

  const { loginUser, isLogged, getUser,  } = useUsers()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isLogged()) {
      navigate('/account')
    }  
  }, [isLogged, navigate])

  const handleLoginEmail = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Completa Los Campos!',
        {
          style: {
            borderRadius: '10px',
            background: '#282c34',
            color: '#2ececece',
          },
        }
      );
    }

    const authUser = {
      email,
      password
    }

    try {
      if (email && password) {
        const newUser = await loginUser(authUser)

        if (newUser) {
          window.localStorage.setItem(
            'User', JSON.stringify({ 'token': newUser.token, 'UID': newUser.UID })
          )
          
          const user = await getUser(newUser.UID, newUser.token)
          console.log('User', user);

          window.localStorage.setItem(
            'loggedUser', JSON.stringify(user)
          )
          toast.success('Usuario Logeado!',
            {
              style: {
                borderRadius: '10px',
                background: '#282c34',
                color: '#2ececece',
              },
            }
          );
          setTimeout(() => {
            navigate('/account')
          }, 2000);
        } else {
          toast.error('Credenciales Invalidas!',
            {
              style: {
                borderRadius: '10px',
                background: '#282c34',
                color: '#2ececece',
              },
            }
          );
        }
      }
    } catch (error) {
      console.error(error.message);
    }
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
            <input type="email" name="email" id="email" placeholder='example@example.com' onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit" className='sendLogin'>Login</button>
        </form>
        <div className='option'>
          <p id='txtNewAccount'>Obten una cuenta</p>
          <button className='sendSignin' onClick={handleSignin}>Signin</button>
        </div>
      </div>
    </div>
  )
}
