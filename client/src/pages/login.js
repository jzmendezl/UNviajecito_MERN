import '../resources/css/login.css'
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/userContext';
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react';
import iconoL from '../resources/img/iconoL.png'


export default function LoginPage() {

  let navigate = useNavigate();

  const { loginUser, isLogged, getUser,  } = useUsers()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isLogged()) {
      navigate('/my_account')
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
        console.log(newUser)
        if (newUser) {
          window.localStorage.setItem(
            'User', JSON.stringify({ 'token': newUser.token, 'UID': newUser.UID })
          )
          
          const user = await getUser(newUser.UID, newUser.token)

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
            navigate('/my_account')
          }, 2000);
        } else {
          console.log('holi')
          toast.error('Credenciales Invalidas!',
            {

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
      <div class="conicono">
      <img src={iconoL} alt="" class='iconopag' />
      </div>
      <h2 class="titulo-form">Iniciar sesión</h2><br></br>
        <form id='formLogin' onSubmit={handleLoginEmail}>
          <label htmlFor="email">
              <span>Email</span>
            <input type="email" name="email" id="email" placeholder='example@unal.edu.co' onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label htmlFor="password" >
             <span>Password</span> 
            <input type="password" name="password" id="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} required/>
          </label>
          <button type="submit" className='sendLogin'>Login</button>
        </form>
        <div className='option'>
          <a className='sendSignin' onClick={handleSignin}>Obtener una cuenta</a>
        </div>
      </div>
    </div>

  )
}
