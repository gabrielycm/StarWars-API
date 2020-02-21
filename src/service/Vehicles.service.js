import axios from 'axios'

const api = axios.create({ baseURL: 'https://swapi.co/api/vehicles'})

export const getVehicles = async body =>{
    const res = await api.get(`/?page=${body}`)
    return res.data
}
