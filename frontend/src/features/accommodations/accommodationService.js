import axios from 'axios'

const API_URL = '/api/accommodations/'

// Create new Accommodation
const createAccommodation = async (accommodationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, accommodationData, config)

  return response.data
}

// Get user Accommodations
export const getAccommodations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  // const response = await axios.get(API_URL, config)
  const response = await axios.get(API_URL)
  console.log('response.data')
  console.log(response.data)

  return response.data
}

// Delete user Accommodation
const deleteAccommodation = async (accommodationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + accommodationId, config)

  return response.data
}

const accommodationService = {
  createAccommodation,
  getAccommodations,
  deleteAccommodation,
}

export default accommodationService