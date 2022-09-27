import toast from "react-hot-toast";

export const validateDomain = (email) => {
    if (email.split('@')[1] === 'unal.edu.co') {
      console.log('email Valido');
      return true;
    }
    else {
      toast.error('Correo Invalido!',
        {
          style: {
            borderRadius: '10px',
            background: '#282c34',
            color: '#2ececece',
          },
        }
      );
      return false;
    }
  }

  export const formValidate = (event) => {
    event.preventDefault();
    let userName = event.target[0].value;
    // eslint-disable-next-line no-unused-vars
    let celPhone = event.target[1].value;
    let email = event.target[2].value;
    // eslint-disable-next-line no-unused-vars
    let pass = event.target[3].value;

    let expRegName =  /^[a-zA-Z0-9_-]{4,16}$/;

    if (!userName) {
      alert('Nombre Requerido')
      return false;
    }
    if (!expRegName.exec(userName)) {
      // alert('El Campo Nombre Admite Letras Y Espacios')
      toast.error('El Campo Nombre de Usuario Admite Letras Y Espacio',
        {
          style: {
            borderRadius: '10px',
            background: '#282c34',
            color: '#2ececece',
          },
        }
      );
    }
    if (validateDomain(email) === true) {
      console.log('Enviar datos');
    } else {
      console.log('Solicitar nuevos datos');
      return false;
    }

    return true;
  }