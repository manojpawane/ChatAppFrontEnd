import axios from 'axios'

/// ajax call to register user details
export const register = newUser => {
    return axios
        .post('user/create', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log('Registered.')
        })
}

/// ajax call for login
export const login = user => {
    return axios
        .post('user/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}