import axios from 'axios'

export const getTravelRequest = async (id) => axios.get(`/travels/${id}`)

export const getAllTravelsRequest = async () => axios.get(`/travels`)

export const addTravelRequest = async (travel) => axios.post(`/travels`, travel)