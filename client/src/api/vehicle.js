import axios from 'axios'

export const getVehicleRequest = async (id) => axios.get(`/vehicle/${id}`)
export const addVehicleRequest = async (vehicle) => axios.post(`/vehicle`, vehicle)