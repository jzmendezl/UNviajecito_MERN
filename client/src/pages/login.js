import '../resources/css/login.css'
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/userContext';
import toast, { Toaster } from 'react-hot-toast'
import React,{ useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material'
import  logoX from '../resources/img/logoX.png'
import {FiLogIn} from 'react-icons/fi'
import {SlBookOpen} from 'react-icons/sl'

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
            navigate('/account')
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
    <div id='image'  >
    <img src={logoX} alt="Logo-UNviajecito" border="0" width={200}  />
    </div> 
       <div id='contentLogin'>
        <form id='formLogin' onSubmit={handleLoginEmail}>
          <label htmlFor="email" className='lbl-email'>
            <Typography color={"black"} variant="h6" >
              Email
            </Typography>
            <input type="email" name="email" id="email" placeholder='example@unal.edu.co' onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label htmlFor="password">
          <Typography color={"black"} variant="h6" >
              Contraseña
            </Typography>
            <input type="password" name="password" id="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} required/>
          </label>
          <Button type="submit" className='sendLogin'variant='contained' sx={{backgroundColor: "gray" }} >Iniciar Sesión &nbsp; <FiLogIn size={20}/></Button>         
          </form>
          <Toaster /> 
         <div className='option'>
          <p id='txtNewAccount'>Obtén una cuenta</p>
          </div>
        <div className='option2'>
        <Button variant='contained' sx={{backgroundColor: "gray",padding:'10px', textAlign:"center"}} onClick={handleSignin}>Registrarse &nbsp;</Button>
      </div>
      </div>
    </div>

  )
}
