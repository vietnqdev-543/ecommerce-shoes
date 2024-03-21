import axios from '../utils/axios-customize';

export const callRegister = (name , email , password , confirmPassword , phone) => {
    return axios.post('/api/user/sign-up' , {name , email , password , confirmPassword ,phone})
}

export const callLogin = (email , password) => {
    return axios.post('/api/user/sign-in',{email, password})
}

export const callLogout = () => {
    return axios.post('/api/user/log-out')
}
export const callUpdateUser = (_id , name , phone) => {
    return axios.put(`/update-user/${_id}` , {name , phone})
}

