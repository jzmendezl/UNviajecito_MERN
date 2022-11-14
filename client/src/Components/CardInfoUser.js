import React, { useState } from 'react'
import { useUsers } from '../context/userContext'
import Photo from '../resources/img/photo_user.svg'
import '../resources/css/cardInfoUser.css'
import editIcon from '../resources/img/editIcon.png'
import { ValidateChangedata } from '../helpers/validateForm'
import { useEffect } from 'react'

const CardInfoUser = () => {

  const { currentUser, setCurrentUser, getCredentials, updateDataUser } = useUsers()
  const [changeDataUser, setChangeDataUser] = useState(false)
  const [userName, setUserName] = useState(currentUser?.userName)
  const [celPhone, setCelPhone] = useState(currentUser?.celPhone)
  const [photoUser, setPhotoUser] = useState(currentUser?.photoUser)
  const [credentials, setCredentials] = useState(null)
  const [file, setFile] = useState(null)
  const [prevData, setPrevData] = useState({})

  useEffect(() => {
    setCredentials(getCredentials())
    setCurrentUser(currentUser)
    setPrevData({
      userName: currentUser?.userName,
      celPhone: currentUser?.celPhone,
      photoUser: currentUser?.photoUser
    })
    setPhotoUser(currentUser?.photoUser)
  }, [currentUser, getCredentials, setCurrentUser])

  const ChangeData = async (e) => {
    e.preventDefault()
    if (ValidateChangedata(userName, celPhone)) {
      setCurrentUser({ ...currentUser, userName, celPhone, photoUser })
      setChangeDataUser(!changeDataUser)
      const user = await updateDataUser(credentials.UID, { ...currentUser, userName, celPhone, photoUser: file })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user))

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

  return (
    <div >
      {
        changeDataUser
          ?
          <div className='dataUser'>
            <div className='divEdit'>
              <button onClick={() => setChangeDataUser(!changeDataUser)} className='btnEdit'>
                <img src={editIcon} alt="" id='iconEdit' />
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
                <img src={editIcon} alt="" id='iconEdit' />
              </button>
            </div>
            <div id='photoUser'>
              <img src={currentUser ? currentUser?.photoUser?.url : Photo} alt="Foto Usuario" id='photoUser' />
            </div>
            <div className='infoUser'>
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