import { useNavigate } from 'react-router-dom';
import '../resources/css/register.css'
import { useUsers } from '../context/userContext'

import { useEffect } from 'react';
import { formValidate } from '../helpers/validateForm';



export default function RegisterPage() {

  let navigate = useNavigate()

  const { isLogged, createUser } = useUsers()

  useEffect(() => {
    if (isLogged()) {
      navigate('/home')
    }
  }, [isLogged, navigate])


  // export const validateDomain = (email) => {
  //   if (email.split('@')[1] === 'unal.edu.co') {
  //     console.log('email Valido');
  //     return true;
  //   }
  //   else {
  //     toast.error('Correo Invalido!',
  //       {
  //         style: {
  //           borderRadius: '10px',
  //           background: '#282c34',
  //           color: '#2ececece',
  //         },
  //       }
  //     );
  //     return false;
  //   }
  // }


  const handleSignInEmail = async (event) => {

    if (formValidate(event)) {
      console.log('Usuario Correcto');

      const newUser = {
        userName: event.target[0].value,
        celPhone: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value
      }

      const currentUser = await createUser(newUser)
      if (currentUser === 11000) {
        alert('Correo en Uso')
      } else {
        navigate('/home')
      }

    }

  }

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div id='pageLogin'>
      <div id='contentLogin'>
        <form action="" id='formLogin' onSubmit={handleSignInEmail}>
          <label htmlFor="name">
            <span>Nombre de Usuario</span>
            <input type="text" name="name" id="name" placeholder='Example' />
          </label>

          {/* <label htmlFor="lastName">
            <span>Apellido</span>
            <input type="text" name="lastName" id="lastName" placeholder='Example' />
          </label> */}

          <label htmlFor="phone">
            <span>Celular</span>
            <input type="tel" name="phone" id="phone" placeholder='3xx xxx xx xx  (Opcional)' />
          </label>

          <label htmlFor="email" className='lbl-email'>
            <span className='txt-email'>Email</span>
            <input type="email" name="email" id="email" placeholder='example@unal.edu.co' pattern=".+@unal.edu\.co" size="30" required></input>
          </label>

          <label htmlFor="password">
            <span>Password</span>
            <input type="password" name="password" id="password" />
          </label>
          <button type="submit" className='sendLogin'>Sign In</button>
        </form>

        <div className='option'>
          <p id='txtNewAccount'>Ya tienes una cuenta</p>
          <button className='sendSignin' onClick={goToLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}
