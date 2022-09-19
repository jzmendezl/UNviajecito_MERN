import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../resources/css/register.css'

export default function RegisterPage() {
  const [state, setState] = useState(0);
  let navigate = useNavigate();

  const [newUser, setNewUser] = useState(null);

  function validateDomain(email) {
    if (email.split('@')[1] === 'unal.edu.co') {
      console.log('email Valido');
      return true;
    }
    else {
      alert('Correo Invalido')
      return false;
    }
  }

  const formValidate = (event) => {
    event.preventDefault();
    let name = event.target[0].value;
    let lastname = event.target[1].value;
    let cel = event.target[2].value;
    let email = event.target[3].value;
    let pass = event.target[4].value;

    let expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let expRegLastName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!name) {
      alert('Nombre Requerido')
      return false;
    }
    if (!expRegName.exec(name)) {
      alert('El Campo Nombre Admite Letras Y Espacios')
    }
    if (!lastname) {
      alert('Nombre Requerido')
      return false;
    }
    if (!expRegLastName.exec(lastname)) {
      alert('El Campo Apellido Admite Letras Y Espacios')
    }
    if (validateDomain(email) === true) {
      console.log('Enviar datos');
    } else {
      console.log('Solicitar nuevos datos');
      return false;
    }

    return true;
  }

  const handleSignInEmail = (event) => {
    if (formValidate(event)) {
      console.log('Usuario Correcto');
      // console.log(e);
      // createUserWithEmailAndPassword(auth, event.target[3].value, event.target[4].value)
      // .then((userCredential) => {
      //   // Signed in
      //   setNewUser(userCredential.user);
      //   // ...
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.log(errorCode, ' ',errorMessage);
      //   // ..
      // });
      
      navigate('./login.js')
    }
    console.log(newUser);
    navigate('/home');
  }


  if (state === 0) {
    return (
      <div id='pageLogin'>
        <div id='contentLogin'>
          <form action="" id='formLogin' onSubmit={handleSignInEmail}>
            <label htmlFor="name">
              <span>Nombre</span>
              <input type="text" name="name" id="name" placeholder='Example' />
            </label>

            <label htmlFor="lastName">
              <span>Apellido</span>
              <input type="text" name="lastName" id="lastName" placeholder='Example' />
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
              <span>Password</span>
              <input type="password" name="password" id="password" />
            </label>
            <button type="submit" className='sendLogin'>Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  if (state === 1) {
    return (
      <div>
        Verifica Tu Correo
      </div>
    );
  }
  return (
    <div>
      Loading...
    </div>
  );
}
