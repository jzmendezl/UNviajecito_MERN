import '../resources/css/login.css'
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/userContext';
import toast from 'react-hot-toast'


export default function LoginPage() {

  const { loginUser, setCurrentUser } = useUsers()

  let navigate = useNavigate();

  const handleLoginEmail = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    const authUser = {
      email,
      password
    }

    try {
      if (email) {
        if (password) {
          const user = await loginUser(authUser)
          // console.log('user', user);
          if (user === '409') {
            toast.error('Contraseña Incorrecta!',
              {
                style: {
                  borderRadius: '10px',
                  background: '#282c34',
                  color: '#2ececece',
                },
              }
            );
          } else if (user === '404') {
            toast.error('Correo Incorrecto!',
            {
              style: {
                borderRadius: '10px',
                background: '#282c34',
                color: '#2ececece',
              },
            }
            );
          } else {
            setCurrentUser(user)
            navigate('/home')
          }
        } else {
          toast.error('Falta contraseña!',
            {
              style: {
                borderRadius: '10px',
                background: '#282c34',
                color: '#2ececece',
              },
            }
          );
        }
      } else {
        toast.error('Falta Correo!',
          {
            style: {
              borderRadius: '10px',
              background: '#282c34',
              color: '#2ececece',
            },
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  //   if (email && password) {
  //     const user = await loginUser(authUser)
  //     console.log('logogog', user);
  //     if (!user) {
  //       toast.error('Usuario No Encontrado!',
  //         {
  //           style: {
  //             borderRadius: '10px',
  //             background: '#282c34',
  //             color: '#2ececece',
  //           },
  //         }
  //       );
  //     } else {
  //       navigate('/home')
  //     }
  //     // await getUser(user.id)
  //   }
  //   else {
  //     toast.error('Hay campos vacios',
  //       {
  //         style: {
  //           borderRadius: '10px',
  //           background: '#282c34',
  //           color: '#2ececece',
  //         },
  //       }
  //     );
  //   }
  // }

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
          <p id='txtNewAccount'>Obten una cuenta</p>
          <button className='sendSignin' onClick={handleSignin}>Signin</button>
        </div>
      </div>
    </div>
  )
}
