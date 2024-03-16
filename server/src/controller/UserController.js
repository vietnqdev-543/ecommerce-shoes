const userService = require('../services/UserService');

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password, confirmPassword, phone } = req.body;
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const isCheckEmail = filter.test(email);
        
        // Kiểm tra dữ liệu đầu vào
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'The input is invalid'
            });
        } else if (!isCheckEmail) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'The email is invalid'
            });
        } else if (password !== confirmPassword) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'Password and confirm password are not the same'
            });
        }

        const createdUser = await userService.createUser(req.body);
        return res.status(200).json(createdUser);
    } catch (error) {
        console.error("Error creating the User", error);
        return res.status(500).json({
            message: "Error creating the User"
        });
    }
};

const loginUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password, confirmPassword, phone } = req.body;
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const isCheckEmail = filter.test(email);
        
        // Kiểm tra dữ liệu đầu vào
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'The input is invalid'
            });
        } else if (!isCheckEmail) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'The email is invalid'
            });
        } else if (password !== confirmPassword) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'Password and confirm password are not the same'
            });
        }

        const createdUser = await userService.createUser(req.body);
        return res.status(200).json(createdUser);
    } catch (error) {
        console.error("Error creating the User", error);
        return res.status(500).json({
            message: "Error creating the User"
        });
    }
};

module.exports = { createUser , loginUser};
