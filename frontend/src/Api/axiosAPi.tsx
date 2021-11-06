import axios from 'axios'

const axiosApi=axios.create({
    baseURL:"http://localhost:5000/",
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})

export default axiosApi;