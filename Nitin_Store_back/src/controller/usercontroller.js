const joi = require("joi");
const isValid = require("../helper/joiValidation");
const { loginSchemas, registerSchemas } = require("../schemas");
const { userService } = require("../services");


const register = async (req, res) => {

    try {
        const { body } = req;
        const data = { ...body };

        const { errors } = isValid(registerSchemas, data);
        if (errors) {
            return res.status(400).json({
                status: false,
                message: errors
            });
        }

        const { response, error } = await userService.register(data);
        if (response) {
            res.status(200).json({
                status: true,
                ...response
            });
        } else {
            res.status(400).json({
                status: false,
                message: error,
            });
        }


    } catch (error) {
        console.log("🚀 ~ file: usercontroller.js:37 ~ register ~ error:", error)
        res.status(400).json({
            status: false,
            message: error,
        })
    }
}

const login = async (req, res) => {

    const { body } = req;
    const data = { ...body };

    const { errors } = isValid(loginSchemas, data);

    if (errors) {
        return res.status(400).json({
            status: false,
            message: errors
        });
    }

    const { response, error } = await userService.login(data);

    if (response) {
        return res.status(200).json({ ...response });
    } else {
        res.status(400).json({
            status: false,
            message: error
        })
    }
}

module.exports = { register, login };