import axios from 'axios'

const api = axios.create({ baseURL: 'https://swapi.co/api/species'})

export const getSpecies = async body =>{
    const res = await api.get(`/?page=${body}`)
    return res.data
}
