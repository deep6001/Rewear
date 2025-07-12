const mongoose = require("mongoose");
const moment = require("moment");
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true,
            default: ''
        },
        email: {
            type: String,
            unique: true,
            require: true,
            default: '',
        },
        mobile: {
            type: String,
            require: true,
            default: '',
        },
        profileImg:{
            type: String,
            default: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740'
        },
        password: {
            type: String,
            require: true,
            default: ''
        },
        role: {
            type: String,
            default: 2
        },
        authToken:{
            type: String,
            default: ''
        },
        points: {
            type: Number,
            default: 0
        },
        createdAt:{
            type: Date,
            default: ''
        }
    },
   {
    versionKey: false
   } 
);

userSchema.pre("save",function (next) {
    const date = moment(new Date()).toISOString();
    this.createdAt = date;
    next();
})

module.exports = mongoose.model("User",userSchema);