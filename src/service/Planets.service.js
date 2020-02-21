import axios from 'axios'

const api = axios.create({ baseURL: 'https://swapi.co/api/planets'})

export const getPlanets = async body =>{
    const res = await api.get(`/?page=${body}`)
    return res.data
}
