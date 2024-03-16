const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        name : {type: String , required : true},
        email : {type: String , required : true},
        password : {type: String ,default: false ,  required : true},
        confirmPassword : {type: String ,default: false ,  required : true},
        phone : {type: Number , required : true},
        // isAdmin : {type: Boolean , required : true},
        // access_token : {type: String , required : true},
        // refresh_token : {type: String , required : true},
    },
    {
        timestamps: true
    }
)
const User = mongoose.model('User', UserSchema)
module.exports = User