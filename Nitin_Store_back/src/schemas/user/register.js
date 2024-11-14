const Joi = require("joi");


const register = Joi.object({
    name: Joi.string().min(3).required(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    c_password: Joi.string().equal(Joi.ref('password'))
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' }).required(),
});

module.exports = register;