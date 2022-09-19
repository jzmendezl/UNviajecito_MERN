import axios from 'axios'

export const getUsersRequest = async () => axios.get('/users')