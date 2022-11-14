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

  let expRegName = /^[a-zA-Z0-9_-\s]{3,16}$/;

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

export const validateFormVehicle = (vehicle) => {
  let expRegPlateCar = /([A-Z]{3})([-]{1})([0-9]{3})/;
  let expRegPlateBike = /([A-Z]{3})([-]{1})([0-9]{2})([A-Z]{1})/;

  if (vehicle?.kind === 'Carro' && (expRegPlateCar.exec(vehicle?.plate) === null)) {
    toast.error('El Campo Placa Debe Ser Valida',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (vehicle?.kind === 'Moto' && (expRegPlateBike.exec(vehicle?.plate) === null)) {
    alert('que pasa')
    toast.error('El Campo Placa Debe Ser Valida',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (vehicle?.model < 1990 || vehicle?.model > 2023) {
    toast.error('El Campo Modelo debe estar entre 1990 y 2023',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (vehicle?.kind === 'Moto' && !(parseInt(vehicle?.seats) === 1)) {
    toast.error('El Campo Puesto Solo Puede Ser 1 Si Eliges Una Moto',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (vehicle?.kind === 'Carro' && (parseInt(vehicle?.seats) < 1 || parseInt(vehicle?.seats) > 5)) {

    toast.error('El Campo Cupos Debe Estar Entre 1 y 5 Si Es Un Carro',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  return true
}

function addMinutes(numOfMinutes, date = new Date()) {
  date.setMinutes(date.getMinutes() + numOfMinutes);

  return date;
}

export const validateAddTravel = (travel) => {
  if (travel?.source === '') {
    toast.error('El Campo Origen No Puede Estar vacio',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (travel?.destiny === '') {
    toast.error('El Campo Destino No Puede Estar Vacio',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (travel?.dateTime < addMinutes(5) || isNaN(travel?.dateTime)) {
    toast.error('El Campo Fecha Debe Ser Minimo 5 Minutos Más De La Fecha Actual',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if ((travel?.vehicle?.kind === 'Carro' && (travel?.seats < 1 || travel?.seats > 5)) || isNaN(travel?.seats)) {
    toast.error('El Campo Cupos Debe Estar Entre 1 y 5 Si Es Un Carro',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (travel?.vehicle?.kind === 'Moto' && (travel?.seats !== 1)) {
    toast.error('El Campo Puesto Solo Puede Ser 1 Si Eliges Una Moto',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (travel?.price < 5000 || travel?.price > 20000) {
    toast.error('El Campo Precio debe estar entre $5000 y $20000',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (travel?.contact === '') {
    toast.error('El Campo Contacto no puede estar vacio',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  if (travel?.vehicle === undefined) {
    toast.error('Debes Seleccionar Un Vehiculo',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    )
    return false
  }

  return true
}

export const ValidateChangedata = (userName, celPhone) => {
  // let userName = user.userName
  // let celPhone = user.celPhone

  let expRegName = /^[a-zA-Z0-9_-\s]{3,16}$/;
  let expRegCel = /^([3]{1})([0-9]{9})$/;

  if (!userName) {
    toast.error('El Campo Nombre de Usuario Es Requerido',
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
    return false
  }

  if (!expRegCel.exec(celPhone)) {
    // alert('El Campo Nombre Admite Letras Y Espacios')
    toast.error('El Celular debe cumplir con el formato de Colombia',
      {
        style: {
          borderRadius: '10px',
          background: '#282c34',
          color: '#2ececece',
        },
      }
    );
    return false
  }

  return true;
}