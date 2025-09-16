import { API } from '../repository/api.js'

export const postGuide = async (payload: GuidePayload) => {
  try {
    const res = await API.post('/guides', payload)

    return res
  } catch (error) {
    throw new Error()
  }
}

export const getGuides = async () => {
  try {
    const res = await API.get('/guides')

    return res
  } catch (error) {
    throw new Error()
  }
}

export const getSingleGuide = async (id: number) => {
  try {
    const res = await API.get(`/guides/${id}`)

    return res
  } catch (error) {
    throw new Error()
  }
}
