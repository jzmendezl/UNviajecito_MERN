import { useNavigate } from 'react-router-dom';
import '../resources/css/register.css'
import { useUsers } from '../context/userContext'

import { useEffect } from 'react';
import { formValidate } from '../helpers/validateForm';
import iconoL from '../resources/img/iconoL.png';



export default function RegisterPage () {

  let navigate = useNavigate()

  const { isLogged, createUser } = useUsers()

  useEffect(() => {
    if (isLogged()) {
      navigate('/my_account')
    }
  }, [isLogged, navigate])

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
        console.log('BAD CREDENTIALS');
      } else {
        navigate('/sendVerify')
      }

    }

  }

  const goToLogin = () => {
    navigate('/login')
  }

  return (

    <div id='pageLogin' >
      <div id='contentLogin'>
        <div class="conicono">
          <img src={iconoL} alt="" class='iconopag' />
        </div>
        <h2 class="titulo-form">Crea una cuenta</h2><br></br>
        <form action="" id='formLogin' onSubmit={handleSignInEmail}>
          <label htmlFor="name">
            <span>Usuario</span>
            <input type="text" name="name" id="name" placeholder='Example' />
          </label>

          <label htmlFor="phone">
            <span>Celular</span>
            <input type="tel" name="phone" id="phone" placeholder='3xx xxx xx xx  (Opcional)' />
          </label>

          <label htmlFor="email" className='lbl-email'>
            <span className='txt-email'>Email</span>
            <input type="email" name="email" id="email" placeholder='example@unal.edu.co' pattern=".+@unal.edu\.co" size="30" required></input>
          </label>

          <label htmlFor="password">
            <span>Contraseña</span>
            <input type="password" name="password" id="password" />
          </label>
          <button type="submit" className='sendLogin'>Registrarse</button>
        </form>

        <div className='option'>
          <a className='sendSignin' onClick={goToLogin}>¿Ya tienes una cuenta?</a>
        </div>
      </div>
    </div>
  );
}
