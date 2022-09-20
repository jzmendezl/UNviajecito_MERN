import { useState, useContext, createContext, useEffect } from "react";
import { getUsersRequest, createUsersRequest, loginUserRequest, getUserRequest } from "../api/users";


const userContext = createContext()

export const useUsers = () => {
  const context = useContext(userContext)
  return context
}


export const UserProvider = ({ children }) => {

  console.log('Container log');
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [authUser, setAuthUser] = useState()

  // const getUsers = async () => {
  //   const res = await getUsersRequest()
  //   console.log(res);
  //   setUsers(res.data)
  // }
  
  const getUser = async (id) => {
    const res = await getUserRequest(id)
    setCurrentUser(res.data)
    return res.data
  }

  const loginUser = async (user) => {
    try {
      const res = await loginUserRequest(user)
      setAuthUser(res.data)
      return res.data
    } catch (error) {
      console.error(error);
      return error.response.data.code
    }
  }

  const createUser = async (newUser) => {
    try {
      const res = await createUsersRequest(newUser)
      setUsers([...users, res.data])
    } catch (error) {
      console.error(error);
      return error.response.data.code
    }
  }

  useEffect(() => {
    // loginUser(authUser)
  }, [])

  return (
    <userContext.Provider value={{
      users,
      // getUsers,
      getUser,
      loginUser,
      createUser,
      currentUser
    }}>
      {children}
    </userContext.Provider>
  )
}
