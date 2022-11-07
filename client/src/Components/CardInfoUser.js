import React, { useState } from 'react'
import { useUsers } from '../context/userContext'
import Photo from '../resources/img/photo_user.svg'
import '../resources/css/cardInfoUser.css'
import editIcon from '../resources/img/editIcon.png'

const CardInfoUser = () => {

  const { currentUser } = useUsers()
  const [changeDataUser, setChangeDataUser] = useState(false)

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
            <form>
              <div id='photoUser'>
                <img src={currentUser ? currentUser?.photoUser?.url : Photo} alt="Foto Usuario" id='photoUser' />
              </div>
              <div className='infoUserCU'>
                <input type="text" name="userName" id="userNameCU" defaultValue={currentUser?.userName} />
                <p className='emailCU'>{currentUser ? currentUser?.email : 'Cargando'}</p>
                <input type="tel" name="celPhone" id="celPhoneCU" defaultValue={currentUser?.celPhone} pattern="3[0-9]{9}" />
              </div>

              <div className='btnApplyEdit'>
                <button>Aplicar</button>
                <button>Cancelar</button>
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