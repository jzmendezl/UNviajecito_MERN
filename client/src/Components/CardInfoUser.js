import React, { useState } from 'react'
import { useUsers } from '../context/userContext'
import Photo from '../resources/img/photo_user.svg'
import '../resources/css/cardInfoUser.css'
import editIcon from '../resources/img/editIcon.png'
import {CiEdit} from  "react-icons/ci";
import { ValidateChangedata } from '../helpers/validateForm'
import { useEffect } from 'react'

const CardInfoUser = () => {

  const { currentUser, setCurrentUser, getCredentials, updateDataUser, getAllTravels } = useUsers()
  const [changeDataUser, setChangeDataUser] = useState(false)
  const [userName, setUserName] = useState(currentUser?.userName)
  const [celPhone, setCelPhone] = useState(currentUser?.celPhone)
  const [photoUser, setPhotoUser] = useState(currentUser?.photoUser)
  const [credentials, setCredentials] = useState(null)
  const [file, setFile] = useState(null)
  const [prevData, setPrevData] = useState({})
  const [travels_User, setTravels_User] = useState([])
  const [rateUser, setRateUser] = useState(currentUser?.rateUser)

  useEffect(() => {
    let rate = []
    setCredentials(getCredentials())
    setCurrentUser(currentUser)
    setPrevData({
      userName: currentUser?.userName,
      celPhone: currentUser?.celPhone,
      photoUser: currentUser?.photoUser
    })
    setPhotoUser(currentUser?.photoUser)

    const getUT = async () => {
      try {
        const res = await getAllTravels()
        const TU = res.filter(travel => (travel.email === currentUser?.email))
        TU.forEach(element => {
          if (element.ratings.length !== 0) {
            rate.push(element.ratings.reduce((a, b) => a + b, 0) / element.ratings.length)
          }
        })
        setTravels_User(TU)
        if (rate.length !== 0) {
          setRateUser(rate.reduce((a, b) => a + b, 0) / rate.length)
        }
        
      } catch (error) {
        console.error(error);
      }
    }

    getUT()

  }, [currentUser, getAllTravels, getCredentials, setCurrentUser])

  const ChangeData = async (e) => {
    e.preventDefault()
    if (ValidateChangedata(userName, celPhone)) {
      setCurrentUser({ ...currentUser, userName, celPhone, photoUser, rateUser })
      setChangeDataUser(!changeDataUser)
      const user = await updateDataUser(credentials.UID, { ...currentUser, userName, celPhone, rateUser, photoUser: file })
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      setTimeout(() => {
        e.target.reset()
      }, 1000);
    }
  }

  const viewNewPhoto = (e) => {
    if (changeDataUser) {
      setTimeout(() => {
        setFile(e.target.files[0])
      }, 1000);
      setPhotoUser({ ...photoUser, url: URL.createObjectURL(e.target.files[0]) })
    } else {
      setPhotoUser(prevData.photoUser)
    }
  }
  // console.log(currentUser);

  return (
    <div >
      {
        changeDataUser
          ?
          <div className='dataUser'>
            <div className='divEdit'>
              <button onClick={() => setChangeDataUser(!changeDataUser)} className='btnEdit'>
                <CiEdit id='iconEdit' />
              </button>
            </div>
            <form onSubmit={ChangeData}>
              <label id='photoUserChanged'>
                <img src={photoUser ? photoUser?.url : 0} alt="Foto Usuario" id='photoUserChanged' />
                <input type="file" name="photoUserChanged" id="inputChange" onChange={viewNewPhoto} />
              </label>
              <div className='infoUserCU'>
                <input type="text" name="userName" id="userNameCU" defaultValue={currentUser?.userName} onChange={e => setUserName(e.target.value)} />
                <p className='emailCU'>{currentUser ? currentUser?.email : 'Cargando'}</p>
                <input type="tel" name="celPhone" id="celPhoneCU" defaultValue={currentUser?.celPhone} pattern="3[0-9]{9}" onChange={e => setCelPhone(e.target.value)} />
              </div>

              <div className='btnApplyEdit'>
                <button type='submit' id='btnFormUIA'>Aplicar</button>
                <button id='btnFormUIC' onClick={e => setChangeDataUser(!changeDataUser)}>Cancelar</button>
              </div>
            </form>
          </div>
          :
          <div className='dataUser'>
            <div className='divEdit'>
              <button onClick={() => setChangeDataUser(!changeDataUser)} className='btnEdit'>
                <CiEdit id='iconEdit' />
              </button>
            </div>
            <div id='photoUser'>
              <img src={currentUser ? currentUser?.photoUser?.url : Photo} alt="Foto Usuario" id='photoUser' />
            </div>
            <div className='infoUser'>
              <p className='titleInfoUser'>Calificacion: {rateUser ? rateUser : 'Cargando'}</p>
              <p className='titleInfoUser'>{currentUser ? currentUser?.userName : 'Cargando'}</p>
              <p className='titleInfoUser'>{currentUser ? currentUser?.email : 'Cargando'}</p>
              <p className='titleInfoUser'>{currentUser ? currentUser?.celPhone : 'Cargando'}</p>
            </div>
          </div>
      }
    </div>
  )
}

export default CardInfoUser