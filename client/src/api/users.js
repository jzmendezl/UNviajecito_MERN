import axios from 'axios'


export const getUsersRequest = async () => axios.get('/users')

export const getUserRequest = async (id, token) => axios.get(`/users/${id}`, { headers: { "Authorization": `Bearer ${token}` } })

export const updateUserRequest = async (id, token, userUpdate) => axios.put(`/users/${id}`, { headers: { "Authorization": `Bearer ${token}` } },userUpdate)

export const loginUserRequest = async (user) => axios.post('/login', user)

export const createUsersRequest = async (newUser) => axios.post('/register', newUser)


