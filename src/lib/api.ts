import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://backend.wyreng.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const socialsClient = axios.create({
  baseURL: 'https://backend.wyreng.com/socials/',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor (optional - for adding auth tokens, etc.)
apiClient.interceptors.request.use(
  (config) => {
    // Add any auth tokens or common headers here if needed
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor (optional - for handling common errors)
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common errors here if needed
    return Promise.reject(error)
  }
)

// Same interceptors for socials client
socialsClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

socialsClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient

