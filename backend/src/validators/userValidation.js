const Joi = require("joi");
const {USER_ROLES_ENUM} = require('../constants/user')

exports.registerValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    mobile: Joi.string().required(),
    role: Joi.number().valid(USER_ROLES_ENUM.ADMIN, USER_ROLES_ENUM.CLIENT).default(USER_ROLES_ENUM.CLIENT),
});

exports.loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

exports.getProfile = Joi.object({
    userId: Joi.string().required()
}); 