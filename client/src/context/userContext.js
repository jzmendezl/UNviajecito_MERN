import { useState, useContext, createContext, useEffect, } from "react";
import { addTravelRequest, getTravelRequest, getAllTravelsRequest, updateTravelRequest } from "../api/travels";
import { createUsersRequest, loginUserRequest, getUserRequest, getUsersRequest, updateUserRequest, updateUserDataRequest } from "../api/users";



const userContext = createContext()

export const useUsers = () => {
  const context = useContext(userContext)
  return context
}


export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState('')
  const [viewRender, setViewRender] = useState(false)


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      'loggedUser'
    )
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setCurrentUser(user)
    }
  }, [])


  const getCredentials = () => {
    const user = JSON.parse(window.localStorage.getItem('User'))
    const token = user.token
    const UID = user.UID
    return { token, UID }
  }

  const isLogged = () => !!(currentUser && currentUser.verifyAccount)

  const logout = () => {
    window.localStorage.clear()
    setCurrentUser(null)
  }

  const getUsers = async () => {
    const res = await getUsersRequest()
    setCurrentUser(res.data)
  }

  const getUser = async (id, token) => {
    const user = await getUserRequest(id, token)
    setCurrentUser(user.data)
    return user.data
  }

  const loginUser = async (user) => {
    try {
      const res = await loginUserRequest(user)
      setToken(res.data.token)
      return res.data
    } catch (error) {
      console.error(error.message);
      if (error.message === 'Request failed with status code 409' || error.message === 'Request failed with status code 404') {
        return '401'
      }
      return console.error(error);
    }
  }

  const createUser = async (newUser) => {
    try {
      const res = await createUsersRequest(newUser)
      setCurrentUser(res.data)
    } catch (error) {
      console.error(error);
      return error.response.data.code
    }
  }

  const updateUser = async (id, userUpdate) => {
    try {
      const user = await updateUserRequest(id, userUpdate)
      setCurrentUser(user.data)
      return user.data
    } catch (error) {
      console.error(error.message);
    }
  }

  const updateDataUser = async (id, userDataUpdate) => {
    try {
      const user = await updateUserDataRequest(id, userDataUpdate)
      setCurrentUser(user.data)
      return user.data
    } catch (error) {
      console.error(error.message);
    }
  }

  const addTravel = async (travel) => {
    try {
      const res = await addTravelRequest(travel)
      return res.data
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  const getTravel = async (id) => {
    try {
      return await getTravelRequest(id)
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  const getAllTravels = async () => {
    try {
      const res = await getAllTravelsRequest()

      return res.data
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  const updateTravel = async (id, filter) => {
    try {
      const res = await updateTravelRequest(id, filter)
      return res.data
    } catch (error) {
      console.error({ message: error.message });
    }

  }

  return (
    <userContext.Provider value={{
      // users,
      getCredentials,
      isLogged,
      logout,
      viewRender,
      setViewRender,
      getUsers,
      getUser,
      loginUser,
      createUser,
      updateUser,
      updateDataUser,
      currentUser,
      setCurrentUser,
      token,
      addTravel,
      getTravel,
      getAllTravels,
      updateTravel
    }}>
      {children}
    </userContext.Provider>
  )
}
