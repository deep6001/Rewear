const  moment  = require("moment");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
      default: null,
    },
    productName: {
      type: String,
      default: "",
      require: true,
    },
    description:{
     type: String,
     default:''
    },
    images: [
      {
        type: String,
        default: "",
      },
    ],
    points: {
      type: Number,
      require: true,
      default: 0,
    },
    clothType: {
      type: String,
      default: "",
    },
    cloth: {
      type: String,
      default: "",
    },
    duration: {
      type: String,
      default: "",
    },
    isBuy: {
      type: Boolean,
      default: false,
    },
    isSwapped: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: "",
    },
  },
  {
    versionKey: false,
  }
);

productSchema.pre("save",function (next) {
    const date = moment(new Date()).toISOString();
    this.createdAt = date;
    next();
})
module.exports = mongoose.model("Product",productSchema);