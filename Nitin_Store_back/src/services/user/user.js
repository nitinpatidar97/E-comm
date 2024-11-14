const jwt = require("jsonwebtoken");
const usermodol = require("../../models/user/user");


const register = async (data) => {
    try {
        const { name, username, email, password, c_password } = data;
        const result = await usermodol.findOne({
            where: { email: email }
        });

        if (result) {
            if (result.dataValues.email == email) {
                const response = {
                    message: "you are already registered in our services.",
                }

                return { response: response }
            }

            if (result.dataValues.username == username) {
                const response = {
                    message: "user name already exist.",
                }

                return { response: response }
            }

        } else {
            const username_result = await usermodol.findOne({
                where: { username: username }
            });

            if (username_result) {
                const response = {
                    message: "user name already exist.",
                }

                return { response: response }
            }

            const result = await usermodol.create(data);

            if (result) {
                const token = jwt.sign({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                },
                    process.env.JWT_PRIVATE_KEY,
                    {
                        expiresIn: process.env.JWT_EXPIRESIN
                    }
                );

                const response = {
                    message: "user registered seccessfully.",
                    token: token,
                    data: {
                        id: result.id,
                        name: result.name,
                        username: result.username,
                        email: result.email
                    }
                }
                return { response: response }
            }
        }
    } catch (error) {
        console.log("🚀 ~ file: user.js:27 ~ register ~ error:", error)
        return { error }
    }
}

const login = async (data) => {
    try {
        const { email, password } = data;
        const result = await usermodol.findOne({
            where: {
                email: email
            }
        });
        if (result) {
            if (result.dataValues.password == password) {
                const token = jwt.sign({
                    id: result.dataValues.id,
                    name: result.dataValues.name,
                    username: result.dataValues.username,
                    email: result.dataValues.email,
                },
                    process.env.JWT_PRIVATE_KEY,
                    {
                        expiresIn: process.env.JWT_EXPIRESIN
                    }
                );

                const response = {
                    status: true,
                    message: "Login Successfully.",
                    token: token,
                    data: {
                        id: result.dataValues.id,
                        name: result.dataValues.name,
                        username: result.dataValues.username,
                        email: result.dataValues.email,
                    }
                }
                return { response }
            } else {
                const response = {
                    status: false,
                    message: "Password does not match.",
                }
                return { response }
            }
        } else {
            const response = {
                status: false,
                message: "Invailid username.",
            }
            return { response }
        }



    } catch (error) {
        console.log("🚀 ~ file: user.js:101 ~ login ~ error:", error)
        return { error }
    }
}

module.exports = {
    register,
    login,
}