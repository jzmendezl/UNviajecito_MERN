import { useState, useContext, createContext, useEffect, } from "react";
import { createUsersRequest, loginUserRequest, getUserRequest, getUsersRequest } from "../api/users";


const userContext = createContext()

export const useUsers = () => {
  const context = useContext(userContext)
  return context
}


export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState('')


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      'loggedUser'
    )
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setCurrentUser(user)
    }
  }, [])

  const isLogged = () => !!currentUser
  
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
      // if (res) {
      //   setCurrentUser(res.data)
      //   return res.data
      // } else {
      //   return '404'
      // }
    } catch (error) {
      console.error(error.message);
      if (error.message === 'Request failed with status code 409' || error.message === 'Request failed with status code 404') {
        return '401'
      }
      // if (error.message === 'Request failed with status code 404') {
      //   return '404'
      // }
      // return error.response.data.code
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

  return (
    <userContext.Provider value={{
      // users,
      isLogged,
      logout,
      getUsers,
      getUser,
      loginUser,
      createUser,
      currentUser,
      setCurrentUser,
      token
    }}>
      {children}
    </userContext.Provider>
  )
}
