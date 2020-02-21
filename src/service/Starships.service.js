import axios from 'axios'

const api = axios.create({ baseURL: 'https://swapi.co/api/starships'})

export const getStarships = async body =>{
    const res = await api.get(`/?page=${body}`)
    return res.data
}
