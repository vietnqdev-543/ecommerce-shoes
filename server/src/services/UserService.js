const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const createUser = (newUser) => {
    return new Promise(async(resolve , reject) =>{
        const { name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser =await User.findOne({
                email : email
            })
            if(checkUser !== null){
                resolve({
                    status : 'OK',
                    message : 'This email is already exists'
                })
            }

            const hash = bcrypt.hashSync(password, 10);

            const createdUser = await User.create({
                name, email, password : hash, confirmPassword: hash, phone
            })
            if(createdUser){
                resolve({
                    status:'OK',
                    message : 'create account is successfully' ,
                    data : createdUser
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createUser
};