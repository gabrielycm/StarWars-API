import axios from 'axios'

const api = axios.create({ baseURL: 'https://swapi.co/api/films'})

export const getFilms = async body =>{
    const res = await api.get(`/?page=${body}`)
    return res.data
}
