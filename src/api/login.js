import http from './index.js'

export const test = params => http.get('/test', { params })

export const fetchToken = data => http.post('/login', data)