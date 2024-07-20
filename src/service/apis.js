import instanciaAxios from "./axiosInstance"

export async function getWeather(city_name, date) {
  const response = await instanciaAxios.get(`/history.json?key=${process.env.REACT_APP_WHETHER_API_KEY}&q=${city_name}&dt=${date}`)
  return response.data
}
