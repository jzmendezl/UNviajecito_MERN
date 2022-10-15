import axios from 'axios'

export const getTravelRequest = async (id) => axios.get(`/vehicle/${id}`)

export const getTravelsRequest = async () => axios.get(`/vehicle`)

export const addTravelRequest = async (travel) => axios.post(`/travels`, travel)