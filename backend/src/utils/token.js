const jwt = require('jsonwebtoken')

const createAuthToken = async (user) => {
    try {
        const authToken = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_TOKEN_SECRET, { expiresIn: process.env.JWT_TOKEN_EXPIRY })
        user.authToken = authToken
        await user.save({ validationBeforeSave: false })

        return authToken
    } catch (error) {
        throw new Error("error creating token", error)
    }
}

module.exports = createAuthToken