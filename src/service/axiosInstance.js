import axios from "axios"

const instanciaAxios = axios.create({
  baseURL: `http://api.weatherapi.com/v1`,
})

export default instanciaAxios