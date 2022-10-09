import { useUsers } from '../context/userContext'
import '../resources/css/sendVerify.css'

const SendVerifyMail = () => {

  const { currentUser, isLogged } = useUsers()

    if (isLogged) {
        window.close()
    }
    
  return (
    <div id='pageSV' >
      <div id = 'bodySV'>
        <p className='nameApp'>UNviajecito</p>
        <p className='titleSV'>Te Da La Bienvenida Gracias Por Registrarte</p>
        <p id='mailSV'>{currentUser?.email}</p>
        <p className='txtbodySV'>Para disfrutar de tu cuenta, hemos enviado un correo, Por favor confirma tu correo, asi tendras acceso a todo lo que te ofrecemos</p>
      </div>

    </div>
  )
}

export default SendVerifyMail