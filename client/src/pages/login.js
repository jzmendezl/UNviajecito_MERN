import React, { useState } from 'react'
import '../resources/css/login.css'
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/userContext';
import { Formik, Form, Field } from 'formik'


export default function LoginPage() {


  const { users } = useUsers()
  const [currentUser, setCurrentUser] = useState(null);
  let navigate = useNavigate();

  const handleLoginEmail = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     setUser(userCredential.user);
    //     navigate('/home');
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, ' ',errorMessage);
    //     // ..
    //   });

    const findEmail = users.filter(user => user.email === email)
    // const findPassword = users.filter(user => user.password === password)
    console.log('datos', findEmail);
    // console.log('datos P', findPassword);
    if (findEmail.length === 1) {
      if (findEmail[0].password === password) {
        setCurrentUser(findEmail[0])
        navigate('/home')
      }
      else {
        alert('Contraseña Incorrecta')
      }
    }
    else {
      alert('Correo No Existe')
    }
  }

  if (currentUser) {
    console.log('Usuario: ', currentUser);
  } else {
    console.log('Usuario: Sin Usuario');
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

        <Formik id='formLogin'
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit = {(values, actions) => {
            console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name='email' placeholder='email' />
              <Field name='password' placeholder='password' />
              <button type='submit'>Login</button>
            </Form>
          )}
        </Formik>

        <div className='option'>
          <button className='sendSignin' onClick={handleSignin}>Signin</button>
        </div>
      </div>
    </div>
  )
}
