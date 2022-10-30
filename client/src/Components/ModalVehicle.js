import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useUsers } from "../context/userContext"
import { validateFormVehicle } from "../helpers/validateForm"
import '../resources/css/ModalVehicle.css'
import closeButton from '../resources/img/cancelIcon.svg'



const ModalVehicle = ({ children, open, close }) => {

    const { currentUser, setCurrentUser, updateUser, getCredentials } = useUsers()
    const [userCredentials, setUserCredentials] = useState('')
    const [vehicleUser, setVehicleUser] = useState([])
    // const [corrtectForm, setCorrtectForm] = useState(false)

    useEffect(() => {

        setUserCredentials(getCredentials())
        setVehicleUser(currentUser?.vehicle)

    }, [currentUser?.vehicle, getCredentials])

    const [kind, setKind] = useState(0)
    const [plate, setPlate] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [seats, setSeats] = useState(0)

    

    const updateData = async (id, filter) => {
        try {
            const res = await updateUser(id, filter)
            return res
        } catch (error) {
            console.error({ message: error });
        }
    }

    const linkVehicle = async (e) => {
        e.preventDefault();

        let vehicle = {
            kind,
            plate,
            model,
            color,
            seats
        }

        if (validateFormVehicle(vehicle)) {
            // setCorrtectForm(true)
            vehicleUser.push(vehicle)
            setCurrentUser({ ...currentUser, vehicle: vehicleUser })
            await updateData(userCredentials.UID, { vehicle: vehicleUser })
            e.target.reset()
        } else {
            toast.error('Verifica Los Campos',
            {
                style: {
                    borderRadius: '10px',
                    background: '#282c34',
                    color: '#2ececece',
                },
            }
        )
        }
    }

    if (!open) return null

    return (
        <div>
            <div className="overlayModalVehicle" />
            <div className="modalVehicleBody">

                <div id="divBtnCancel">
                    <button onClick={close} id='btnCancelVehicle' >
                        <img src={closeButton} alt="" />
                    </button>
                </div>

                <form onSubmit={linkVehicle}>
                    <p className='titleLinkUser'>Vincular Vehiculo a la cuenta</p>
                    <div id='kind'>
                        <label htmlFor="kindCar" className='lblLinkUser'>
                            <p className='titleFormLink'>Carro</p>
                            <input type='radio' id='kindCar' name='kind' value={'Carro'} onChange={(e) => setKind(e.target.value)} />
                        </label>
                        <label htmlFor="kindBike" className='lblLinkUser'>
                            <p className='titleFormLink'>Moto</p>
                            <input type='radio' id='kindBike' name='kind' value={'Moto'} onChange={(e) => setKind(e.target.value)} />
                        </label>
                    </div>
                    <label htmlFor="plate" className='lblLinkUser'>
                        <p className='titleFormLink'>Placa</p>
                        <input type="text" id='plate' onChange={(e) => setPlate(e.target.value)} placeholder='ABC-123' />
                    </label>
                    <label htmlFor="model" className='lblLinkUser'>
                        <p className='titleFormLink'>Modelo</p>
                        <input type="text" id='model' onChange={(e) => setModel(e.target.value)} min='1990' max='2023' placeholder="2022"/>
                    </label>
                    <label htmlFor="color" className='lblLinkUser'>
                        <p className='titleFormLink'>Color</p>
                        <input type="text" id='color' onChange={(e) => setColor(e.target.value)} placeholder='Negro'/>
                    </label>
                    <label htmlFor="seats" className='lblLinkUser'>
                        <p className='titleFormLink'>Puestos</p>
                        <input type="number" id='seats'  onChange={(e) => setSeats(e.target.value)} placeholder='1'/>
                    </label>
                    <div id='btnFormLink'>
                        <button type="submit" id='btnAdd' >Agregar</button>
                    </div>
                </form>
                {children}
            </div>
        </div>
    )
}

export default ModalVehicle