import axios from 'axios'

const url = 'https://flipkarts.herokuapp.com'

export const postUser = async (user) => {
    return await axios.post(`${url}/signup`,user)
}

export const userLogin = async (user) => {
    return await axios.post(`${url}/login`,user)
}