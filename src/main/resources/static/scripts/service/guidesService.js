import { API } from '../repository/api'

export const postGuide = () => {
  API.constructEndpoint('/guides')
}
