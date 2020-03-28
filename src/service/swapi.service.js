import axios from 'axios'

const api = axios.create({ baseURL: 'https://swapi.co/api'})

export const getSwapi = async (service, page) =>{
    const res = await api.get(`/${service}/?page=${page}`)
    return res.data
}
