import axios from 'axios'
const baseUrl = '/api/persons'

// const baseUrl = 'http://localhost:3001/api/notes'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

// const update = (newObject) => {
//   return axios.put(`${baseUrl}`, newObject)
// }

export default {
  getAll: getAll,
  create: create,
  // update: update
}