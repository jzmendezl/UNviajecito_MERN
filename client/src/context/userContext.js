import { useState, useContext, createContext, useEffect, } from "react";
import { createUsersRequest, loginUserRequest, getUserRequest, getUsersRequest, updateUserRequest } from "../api/users";
import { addVehicleRequest, getVehicleRequest } from "../api/vehicle";


const userContext = createContext()

export const useUsers = () => {
  const context = useContext(userContext)
  return context
}


export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState('')
  const [userVehicle, setUserVehicle] = useState(null)


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      'loggedUser'
    )
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setCurrentUser(user)
    }
  }, [])

  const isLogged = () => !!(currentUser && currentUser.verifyAccount)

  const logout = () => {
    window.localStorage.clear()
    setCurrentUser(null)
  }

  const getUsers = async () => {
    const res = await getUsersRequest()
    console.log(res);
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

  const updateUser = async (id, token, userUpdate) => {
    try {
      const user = await updateUserRequest(id, token, userUpdate)
      console.log('uc', user.data);
      setCurrentUser(user.data)
      return user.data
    } catch (error) {
      console.error(error.message);
    }
  }

  const addVehicle = async (vehicleUser) => {
    try {
      const vehicle = await addVehicleRequest(vehicleUser)
      setUserVehicle(vehicle.data)
      return vehicle.data
    } catch (error) {
      console.error(error);
    }
  }

  const getVehicle = async (VID) => {
    const vehicle = await getVehicleRequest(VID)
    setUserVehicle(vehicle.data)
    return vehicle.data
  }

  return (
    <userContext.Provider value={{
      // users,
      isLogged,
      logout,
      getUsers,
      getUser,
      loginUser,
      createUser,
      updateUser,
      currentUser,
      setCurrentUser,
      token,
      addVehicle,
      getVehicle,
    }}>
      {children}
    </userContext.Provider>
  )
}
