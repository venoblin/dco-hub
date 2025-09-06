import { API } from '../repository/api.js'

export const postGuide = async (payload) => {
  try {
    const res = await API.post('/guides', payload)

    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
