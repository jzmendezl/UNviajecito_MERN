import { useState, useContext, createContext, useEffect } from "react";
import { getUsersRequest } from "../api/users";


const userContext = createContext()

export const useUsers = () => {
  const context = useContext(userContext)
  return context
}


export const UserProvider = ({ children }) => {

  console.log('Container log');
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await getUsersRequest()
    console.log(res);
    setUsers(res.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <userContext.Provider value={{
      users,
      getUsers
    }}>
      {children}
    </userContext.Provider>
  )
}
