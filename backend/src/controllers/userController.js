const userModel = require("../models/user/userModel");
const { ApiResponse } = require("../utils/ApiResponse");
const { EncryptPassword, verifyPassword } = require("../utils/password");
const createAuthToken = require("../utils/token");
const { ObjectId } = require("mongoose").Types;

const cookieOptions = {
  httpOnly: true,
  secure: false,
  maxAge: 24 * 60 * 60 * 1000
};

const register = async (req, res) => {
  try {
    let { firstName, lastName, email, password, role, mobile } = req.body;
    // console.log(req.body)
    const exisitingUser = await userModel.findOne({ email: email }).exec();
    if (exisitingUser) {
      return res
        .status(400)
        .json(
          new ApiResponse(
            400,
            {},
            `User with email '${exisitingUser.email}' already exists!`
          )
        );
    }
    const name = firstName + " " + lastName;
    const points = 5 
    const hashedPassword = await EncryptPassword(password);
    const newUser =  new userModel({
      email: email,
      name: name,
      password: hashedPassword,
      role: role,
      mobile: mobile,
      points : points 
    });
    const savedUser = await newUser.save() 
    const authToken = await createAuthToken(savedUser);
     return res
      .status(200)
      .cookie("authToken", authToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          {
            authToken: authToken
          },
          "User logged in successfully"
        )
      );
  } catch (error) {
    console.error("register--------->", error);
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Error creating user"));
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email }).exec();
    if (!user) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, "User not found (Enter valid email) "));
    }

    const isValid = await verifyPassword(user.password, password);
    if (!isValid) {
      return res
        .status(400)
        .json(
          new ApiResponse(
            400,
            {},
            "Invalid Password"
          )
        );
    }
    const authToken = await createAuthToken(user);
    return res
      .status(200)
      .cookie("authToken", authToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          {
            authToken,
          },
          "User logged in successfully"
        )
      );
  } catch (error) {
    console.error("login-------->", error);
    return res.status(500).json(new ApiResponse(500, {}, "Error while login"));
  }
};
const logout = async (req, res) => {
  try {
    let authToken = req?.cookies?.authToken;
    let { id: userId } = req.user._id;
    if (!authToken)
      return res
        .status(400)
        .json(new ApiResponse(400, {}, "User Already logged out"));

    await userModel.updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          authToken: "",
        },
      },
      { new: true }
    );
    return res
      .status(200)
      .clearCookie("authToken", cookieOptions)
      .json(new ApiResponse(200, {}, "User logged out successfully"));
  } catch (error) {
    console.error("logout----->", error);
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Error while logging out"));
  }
};

const getProfile = async (req,res) => {
    try {
        const user = await userModel.findById(req.user._id).select('-password').lean();
        console.log(req.user._id);
        if(!user){
            return res.status(404).json(new ApiResponse(404, {},"User Not found"));
        }
        return res.status(200).json(new ApiResponse(200,{user}, "Operation successfully completed."));
    } catch (error) {
        console.error("getProfile -----> ", error);
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Oops there is an issue at our end please try again later"));
  }    
    
}
module.exports = {
  register,
  login,
  logout,
  getProfile
};
