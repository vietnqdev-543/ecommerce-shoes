const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService")

const createUser = async (newUser) => {
    try {
        const { name, email, password, confirmPassword, phone } = newUser;
        const checkUser = await User.findOne({ email: email });

        if (checkUser !== null) {
            return {
                status: 'ERR_EMAIL_EXISTS',
                message: 'Email đã được sử dụng.'
            };
        }

        const hash = bcrypt.hashSync(password, 10);
        const createdUser = await User.create({ name, email, password: hash, phone });

        if (createdUser) {
            return {
                status: 'OK',
                message: 'SUCCESS',
                data: createdUser
            };
        }
    } catch (error) {
        throw error;
    }
};

const loginUser = async (userLogin) => {
    try {
        const { email, password } = userLogin;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email);
        
        // Kiểm tra định dạng email
        if (!isCheckEmail) {
            return {
                status: 'ERR',
                message: 'Email không đúng định dạng'
            };
        }

        // Tìm kiếm user trong cơ sở dữ liệu
        const checkUser = await User.findOne({ email: email });
        if (checkUser === null) {
            return {
                status: 'ERR',
                message: 'Email không tồn tại'
            };
        }

        // Kiểm tra mật khẩu
        const comparePassword = bcrypt.compareSync(password, checkUser.password);
        if (!comparePassword) {
            return {
                status: 'ERR',
                message: 'Tài khoản hoặc mật khẩu không đúng'
            };
        }

        // Tạo access token và refresh token
        const access_token = await genneralAccessToken({
            id: checkUser.id,
            isAdmin: checkUser.isAdmin
        });
        const refresh_token = await genneralRefreshToken({
            id: checkUser.id,
            isAdmin: checkUser.isAdmin
        });

        return {
            status: 'OK',
            message: 'SUCCESS',
            data: checkUser,
            access_token,
            refresh_token
        };
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, data) => {
    try {
      const checkUser = await User.findOne({ _id: id });
      if (!checkUser) {
        return {
          status: 'ERR',
          message: 'The user is not defined',
        };
      }
  
      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
      return {
        status: 'OK',
        message: 'SUCCESS',
        data: updatedUser,
      };
    } catch (e) {
      throw e;
    }
  };

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }

            await User.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete user success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyUser = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {

            await User.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete user success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find().sort({createdAt: -1, updatedAt: -1})
            resolve({
                status: 'OK',
                message: 'Success',
                data: allUser
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({
                _id: id
            })
            if (user === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: user
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,
    deleteManyUser
}