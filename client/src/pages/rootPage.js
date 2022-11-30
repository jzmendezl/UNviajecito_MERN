import '../resources/css/rootpage.css'
import { useNavigate } from 'react-router-dom'
import { useUsers } from '../context/userContext'
import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { FiLogIn } from 'react-icons/fi'
import { SlBookOpen } from 'react-icons/sl'
import iconoL from '../resources/img/iconoL.png'

export default function RootPage() {
  let navigate = useNavigate()
  const { isLogged } = useUsers()


  useEffect(() => {
    if (isLogged()) {
      navigate('/my_account')
    }
  }, [isLogged, navigate])

  const goLogin = () => {
    navigate('login')
  }

  const goRegister = () => {
    navigate('register')
  }

  return (
    <div className='pageRoot'>

      <img src={iconoL} alt="Logo-UNviajecito" border="0" className='imgRoot' />
      <div>
        <Box fontWeight='fontWeightBold' m={1} sx={{ outlineStyle: "solid", padding: "7px", borderRadius: "10px", outlineColor: "white" }}>
          <Typography color={"white"}>
            Placentero y seguro &nbsp;
            <MdOutlineVerifiedUser color='white' size={20} sx={{ position: "relative" }} />
          </Typography>
        </Box>
      </div>
      <div >
        <Button variant='contained' sx={{ backgroundColor: "gray" }} onClick={goLogin}>Iniciar Sesión &nbsp; <FiLogIn size={20} /></Button>
      </div>
      <div>
        <Button variant='contained' sx={{ backgroundColor: "gray", margin: "5px" }} onClick={goRegister}>Registro &nbsp;<SlBookOpen size={20} /></Button>
      </div>
    </div>
  )
}
