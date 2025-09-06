import { API } from '../repository/api.js'

export const postGuide = async (payload) => {
  try {
    const res = await API.post('/guides', payload)

    return res
  } catch (error) {
    console.log(error)
  }
}

export const getGuides = async () => {
  try {
    const res = await API.get('/guides')

    return res
  } catch (error) {
    console.log(error)
  }
}
